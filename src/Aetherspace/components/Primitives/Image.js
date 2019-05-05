import React, { useState, useEffect, useCallback } from 'react';
import { Image as RNImage } from 'react-native-web';
import styled from 'styled-components/primitives';
// Utils
import { cssDimensions } from '../../../utilRegistry';

/* --- Styles ------------------------------------------------------------------------------ */

const StyledImage = styled.Image`
    ${({ css }) => (css ? css : '')}
    ${({ width, srcWidth, srcHeight, ratio, css, originalSize, isFluid }) => {
        let heightCSS = '';
        let widthCSS = '';
        const { cssWidth, cssHeight, units } = cssDimensions(css);
        if (!isFluid && JSON.stringify(css).includes('height: auto')) isFluid = true;
        if (!isFluid && JSON.stringify(css).includes('width: auto')) isFluid = true;
        if (!isFluid && !cssHeight) isFluid = true;
        if (isFluid && !originalSize) widthCSS = cssWidth ? `width: ${cssWidth}${units};` : 'width: 100%;';
        if (isFluid && width) heightCSS = `height: ${width * ratio}px;`;
        if (originalSize && units === 'px' && srcWidth) {
            widthCSS = `width: ${srcWidth}px;`;
            heightCSS = `height: ${srcWidth * ratio}px;`;
        }
        return `${widthCSS} ${heightCSS}`;
    }}
`;

/* --- <Image/> ------------------------------------------------------------------------------ */

const Image = ({ src, css, ...props }) => {
    const [srcDimensions, setSrcDimensions] = useState({ srcWidth: 0, srcHeight: 0, ratio: 0 });
    const [dimensions, setDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const imgSrc = src || props.source.uri;

    // Measure src dimensions from url
    useEffect(() => {
        RNImage.getSize(imgSrc, (srcWidth, srcHeight) => {
            setSrcDimensions({ srcWidth, srcHeight, ratio: srcHeight / srcWidth });
        });
    }, []);

    // Measure parent dimensions from url
    const measureWidth = useCallback(({ nativeEvent }) => setDimensions({ ...nativeEvent.layout }), []);

    // Render
    return (
        <StyledImage
            onLayout={measureWidth}
            source={{ uri: imgSrc }}
            resizeMode="cover"
            {...srcDimensions}
            {...dimensions}
            css={css}
            {...props}
        />
    );
};

/* --- Extensions ------------------------------------------------------------------------------ */

Image.getSize = RNImage.getSize;
Image.prefetch = RNImage.prefetch;
Image.abortPrefetch = RNImage.abortPrefetch;
Image.queryCache = RNImage.queryCache;
Image.resolveAssetSource = RNImage.resolveAssetSource;

/* --- Export Primitive ------------------------------------------------------------------------------ */

export default Image;
