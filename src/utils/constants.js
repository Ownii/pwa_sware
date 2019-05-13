export const BLOCK_TYPE_TARGET = 0;
export const BLOCK_TYPE_WALL = 1;
export const BLOCK_TYPE_MOVE = 2;

export const COLOR_RED = 0;
export const COLOR_BLUE = 1;
export const COLOR_GREEN = 2;
export const COLOR_ORANGE = 3;
export const COLOR_PURPLE = 4;
export const COLOR_LIME = 5;
export const COLOR_GREY = 6;

export const COLOR = {
    [COLOR_RED]: '#F44336',
    [COLOR_BLUE]: '#2196F3',
    [COLOR_GREEN]: '#009688',
    [COLOR_ORANGE]: '#FFC107',
    [COLOR_PURPLE]: '#9C27B0',
    [COLOR_LIME]: '#CDDC39',
    [COLOR_GREY]: '#9E9E9E'
};

export const alphaColor = (color, alpha) => {
    color = color.replace('#', '');
    if (color.length === 8) color = color.substring(2);
    color = (alpha * 255).toString(16) + color;

    return '#' + color;
};
