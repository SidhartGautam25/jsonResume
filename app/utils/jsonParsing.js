export const parseCodeToJson = (code) => {
    // Regex to split the code into blocks starting with 'start' or 'startFromSameLine'
    const blocks = code.split(/(?=start|startFromSameLine)/g).filter(b => b.trim() !== '');
    console.log("blocks is ", blocks);

    const jsonOutput = {
        definitions: {}, // To store variables created with 'init'
        elements: [],    // To store the elements to be rendered
    };

    let globalStyles = {};

    blocks.forEach(block => {
        const lines = block.trim().split('\n').map(line => line.trim()).filter(line => line);
        console.log("lines are ", lines);
        if (lines.length <= 2) return; // Must have at least 'start' and 'end'

        const blockType = lines[0];
        const commands = lines.slice(1, -1);
        console.log("commands for this line is ", commands);

        if (lines[lines.length - 1] !== 'end') return; // Malformed block

        let element = {
            type: 'div',
            content: [],
            styles: {},
            isInline: blockType === 'startFromSameLine',
            url: null,
        };


        // Process 'init' blocks to define style variables
        if (commands.length > 0 && commands[0].startsWith('init')) {
            const parts = commands[0].split(' ');
            const varName = parts[1];
            if (varName) {
                let definitionStyles = {};
                commands.slice(1).forEach(cmd => {
                    const [key, ...valueParts] = cmd.split(' ');
                    if (key === 'set') {
                        const prop = valueParts[0];
                        const val = valueParts.slice(1).join(' ').replace(/"/g, '');
                        definitionStyles[prop] = val;
                    }
                });
                if (varName === 'global') {
                    globalStyles = definitionStyles;
                } else {
                    jsonOutput.definitions[varName] = definitionStyles;
                }
            }
            return; // This block is for definition only, not rendering
        }

        // Process regular renderable blocks
        commands.forEach(cmd => {
            const parts = cmd.split(' ');
            const command = parts[0];
            const args = parts.slice(1).join(' ').replace(/"/g, '');

            switch (command) {
                case 'write':
                    element.content.push({ type: 'text', value: args });
                    break;
                case 'draw':
                    if (args === 'line') {
                        element.type = 'hr';
                    }
                    break;
                case 'add':
                    if (args === 'dot') {
                        element.content.push({ type: 'dot' });
                    }
                    break;
                case 'set':
                    const [prop, ...valueParts] = parts.slice(1);
                    const value = valueParts.join(' ').replace(/"/g, '');
                    element.styles[prop] = value;
                    break;
                case 'design':
                    element.design = args; // Store the design variable name
                    break;
                case 'set_url': // Changed to avoid conflict with 'set'
                    element.url = args;
                    break;
                default:
                    // Ignore unknown commands
                    break;
            }
        });

        jsonOutput.elements.push(element);
    });

    // Post-process to apply global styles and definitions
    jsonOutput.elements = jsonOutput.elements.map(el => {
        let finalStyles = { ...globalStyles };
        if (el.design && jsonOutput.definitions[el.design]) {
            finalStyles = { ...finalStyles, ...jsonOutput.definitions[el.design] };
        }
        finalStyles = { ...finalStyles, ...el.styles };
        el.styles = finalStyles;
        return el;
    });


    console.log("jsonOutput is ", jsonOutput);
    return jsonOutput;
};



