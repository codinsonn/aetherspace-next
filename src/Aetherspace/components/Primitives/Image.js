import React, { useState, useEffect } from 'react';
import { Image as RNImage } from 'react-native-web';
import styled from 'styled-components/primitives';
// Utils
import { cssDimensions } from '../../../utilRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const StyledImage = styled.Image`
    ${({ width, ratio }) => (width ? `width: ${width}px; height: ${width * ratio}px;` : '')}
    ${({ width, height, ratio, css }) => {
        const { cssWidth, cssHeight, cssRatio } = cssDimensions(css);
        if (!css || cssRatio || !cssWidth || cssHeight) return '';
        return `height: ${cssWidth * ratio}px;`;
    }}
    ${({ css }) => (css ? css : '')}
`;

/* --- <Image/> ------------------------------------------------------------------------------ */

const Image = ({ src, css, ...props }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, ratio: 1 });
    const imgSrc = src || props.source.uri;

    // Measure from url
    useEffect(() => {
        RNImage.getSize(imgSrc, (width, height) => setDimensions({ width, height, ratio: height / width }));
    }, []);

    return <StyledImage source={{ uri: imgSrc }} {...dimensions} css={css} {...props} />;
};

/* --- Export Primitive ------------------------------------------------------------------------------ */

export default Image;
