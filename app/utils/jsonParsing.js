const DECLARE_REGEX = /^declare\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/;

const stripWrappingQuotes = (value) => {
  const trimmedValue = value.trim();

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1);
  }

  return trimmedValue;
};

const collectDeclaredVariables = (code) => {
  const variables = {};
  const remainingLines = [];

  code.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    const declareMatch = trimmedLine.match(DECLARE_REGEX);

    if (!declareMatch) {
      remainingLines.push(line);
      return;
    }

    const [, variableName, rawValue] = declareMatch;
    variables[variableName] = stripWrappingQuotes(rawValue);
  });

  return {
    variables,
    codeWithoutDeclarations: remainingLines.join('\n'),
  };
};

const interpolateVariables = (value, variables) =>
  value.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g, (_, variableName) => {
    if (Object.prototype.hasOwnProperty.call(variables, variableName)) {
      return variables[variableName];
    }

    return `$${variableName}`;
  });

const resolveValue = (rawValue, variables) =>
  interpolateVariables(stripWrappingQuotes(rawValue), variables);

const createElement = (blockType) => ({
  type: 'div',
  content: [],
  styles: {},
  isInline: blockType === 'startFromSameLine',
  url: null,
  layout: null,
  gap: null,
});

export const parseCodeToJson = (code) => {
  const { variables, codeWithoutDeclarations } = collectDeclaredVariables(code);

  const blocks = codeWithoutDeclarations
    .split(/(?=^startFromSameLine\b|^start\b)/gm)
    .filter((block) => block.trim() !== '');

  const jsonOutput = {
    definitions: {},
    variables,
    pageStyles: {},
    elements: [],
  };

  let globalStyles = {};

  blocks.forEach((block) => {
    const lines = block
      .trim()
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);

    if (lines.length <= 2) return;

    const blockType = lines[0];
    const commands = lines.slice(1, -1);

    if (lines[lines.length - 1] !== 'end') return;

    const element = createElement(blockType);

    if (commands.length > 0 && commands[0].startsWith('init')) {
      const parts = commands[0].split(' ');
      const definitionName = parts[1];

      if (definitionName) {
        const definitionStyles = {};

        commands.slice(1).forEach((cmd) => {
          const [key, ...valueParts] = cmd.split(' ');

          if (key === 'set') {
            const prop = valueParts[0];
            const value = resolveValue(valueParts.slice(1).join(' '), variables);
            definitionStyles[prop] = value;
          }
        });

        if (definitionName === 'global') {
          globalStyles = definitionStyles;
        } else if (definitionName === 'page') {
          jsonOutput.pageStyles = definitionStyles;
        } else {
          jsonOutput.definitions[definitionName] = definitionStyles;
        }
      }

      return;
    }

    commands.forEach((cmd) => {
      const parts = cmd.split(' ');
      const command = parts[0];
      const args = resolveValue(parts.slice(1).join(' '), variables);

      switch (command) {
        case 'write':
          element.content.push({ type: 'text', value: args });
          break;
        case 'headline':
          element.content.push({ type: 'headline', value: args });
          break;
        case 'strong':
          element.content.push({ type: 'strong', value: args });
          break;
        case 'muted':
          element.content.push({ type: 'muted', value: args });
          break;
        case 'badge':
          element.content.push({ type: 'badge', value: args });
          break;
        case 'draw':
          if (args === 'line') {
            element.type = 'hr';
          } else if (args === 'bar') {
            element.type = 'vr';
          }
          break;
        case 'add':
          if (args === 'dot') {
            element.content.push({ type: 'dot' });
          } else if (args === 'pipe') {
            element.content.push({ type: 'pipe' });
          } else if (args === 'break') {
            element.content.push({ type: 'break' });
          }
          break;
        case 'set': {
          const [prop, ...valueParts] = parts.slice(1);
          const value = resolveValue(valueParts.join(' '), variables);
          element.styles[prop] = value;
          break;
        }
        case 'design':
          element.design = args;
          break;
        case 'set_url':
          element.url = args;
          break;
        case 'layout':
          element.layout = args;
          break;
        case 'gap':
          element.gap = args;
          break;
        case 'align':
          element.styles.align = args;
          break;
        default:
          break;
      }
    });

    jsonOutput.elements.push(element);
  });

  jsonOutput.elements = jsonOutput.elements.map((element) => {
    let finalStyles = { ...globalStyles };

    if (element.design && jsonOutput.definitions[element.design]) {
      finalStyles = { ...finalStyles, ...jsonOutput.definitions[element.design] };
    }

    finalStyles = { ...finalStyles, ...element.styles };
    element.styles = finalStyles;
    return element;
  });

  return jsonOutput;
};
