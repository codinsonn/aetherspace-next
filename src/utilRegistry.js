import { css as styledCSS } from 'styled-components';

/* --- numbersFromString ------------------------------------------------------------------------------ */
export const numbersFromString = str => {
    const regex = /[+-]?\d+(?:\.\d+)?/g;
    const matches = [];
    let match;
    while ((match = regex.exec(str))) matches.push(parseFloat(match[0]));
    return matches;
};

/* --- cssDimensions ------------------------------------------------------------------------------ */
export const cssDimensions = css => {
    if (typeof css === 'string') css = styledCSS`${css}`;
    if (!Array.isArray(css)) return {};
    let cssWidth = null;
    let cssHeight = null;
    let cssRatio = null;
    let units = 'px';
    css.forEach(styleDefs => {
        if (typeof styleDefs !== 'string') return;
        styleDefs.split(';\n').forEach(rule => {
            if ((rule.includes('height:') || rule.includes('width:')) && rule.includes('%')) units = '%';
            if (rule.includes('height:') && !rule.includes('max')) cssHeight = numbersFromString(rule)[0];
            if (rule.includes('width:') && !rule.includes('max')) cssWidth = numbersFromString(rule)[0];
            if (cssWidth && cssHeight) cssRatio = cssHeight / cssWidth;
        });
    });
    return { cssWidth, cssHeight, cssRatio, units };
};
