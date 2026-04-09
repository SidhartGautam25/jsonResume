const pixelOrRaw = (value) => (/^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : value);

export const convertToReactStyles = (styles) => {
  const reactStyles = {};
  if (!styles) return reactStyles;

  Object.entries(styles).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return;
    }

    switch (key) {
      case 'backgroundColor':
        reactStyles.backgroundColor = value;
        break;
      case 'color':
        reactStyles.color = value;
        break;
      case 'size':
        reactStyles.fontSize = `${value}px`;
        break;
      case 'fontWeight':
        reactStyles.fontWeight = value;
        break;
      case 'lineHeight':
        reactStyles.lineHeight = value;
        break;
      case 'fontFamily':
        reactStyles.fontFamily = value;
        break;
      case 'letterSpacing':
        reactStyles.letterSpacing = `${value}px`;
        break;
      case 'transform':
        reactStyles.textTransform = value;
        break;
      case 'decoration':
        reactStyles.textDecoration = value;
        break;
      case 'padding':
        reactStyles.padding = `${value}px`;
        break;
      case 'bleed': {
        const bleedValue = Number(value);
        if (!Number.isNaN(bleedValue)) {
          reactStyles.margin = `-${bleedValue}px`;
          reactStyles.width = `calc(100% + ${bleedValue * 2}px)`;
          reactStyles.minHeight = `calc(100% + ${bleedValue * 2}px)`;
        }
        break;
      }
      case 'spaceFromTop':
        reactStyles.marginTop = `${value}px`;
        break;
      case 'spaceFromBottom':
        reactStyles.marginBottom = `${value}px`;
        break;
      case 'spaceFromLeft':
        reactStyles.marginLeft = `${value}px`;
        break;
      case 'spaceFromRight':
        reactStyles.marginRight = `${value}px`;
        break;
      case 'paddingLeft':
        reactStyles.paddingLeft = `${value}px`;
        break;
      case 'paddingRight':
        reactStyles.paddingRight = `${value}px`;
        break;
      case 'paddingTop':
        reactStyles.paddingTop = `${value}px`;
        break;
      case 'paddingBottom':
        reactStyles.paddingBottom = `${value}px`;
        break;
      case 'width':
        reactStyles.width = pixelOrRaw(value);
        break;
      case 'height':
        if (value === 'remaining') {
          reactStyles.flex = '1 1 0';
          reactStyles.minHeight = '0';
        } else {
          reactStyles.height = pixelOrRaw(value);
        }
        break;
      case 'maxWidth':
        reactStyles.maxWidth = pixelOrRaw(value);
        break;
      case 'borderWidth':
        reactStyles.borderWidth = `${value}px`;
        reactStyles.borderStyle = 'solid';
        break;
      case 'borderColor':
        reactStyles.borderColor = value;
        break;
      case 'borderRadius':
        reactStyles.borderRadius = `${value}px`;
        break;
      case 'align':
        reactStyles.textAlign = value;
        break;
      case 'weight':
        reactStyles.borderBottomWidth = `${value}px`;
        break;
      case 'borderLeftWidth':
        reactStyles.borderLeftWidth = `${value}px`;
        reactStyles.borderLeftStyle = 'solid';
        break;
      case 'borderLeftColor':
        reactStyles.borderLeftColor = value;
        break;
      default:
        break;
    }
  });

  return reactStyles;
};
