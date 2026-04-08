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
            case 'weight':
                reactStyles.borderBottomWidth = `${value}px`;
                break;
            default:
                break;
        }
    });
    return reactStyles;
};

