const pixelOrRaw = (value) => (/^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : value);

export const convertToReactStyles = (styles) => {
  const reactStyles = {};
  if (!styles) return reactStyles;

  Object.entries(styles).forEach(([key, value]) => {
    switch (key) {
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
        reactStyles.height = pixelOrRaw(value);
        break;
      case 'maxWidth':
        reactStyles.maxWidth = pixelOrRaw(value);
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
