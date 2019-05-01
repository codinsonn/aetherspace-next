import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

/* --- <Image/> ------------------------------------------------------------------------------ */

const Img = ({ src, source, ...props }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, ratio: 1 });
    const imgSrc = src || source.uri;

    // Measure from url
    useEffect(() => {
        Image.getSize(imgSrc, (width, height) => setDimensions({ width, height, ratio: width / height }));
    }, []);

    const { width, height } = dimensions;
    return <Image source={{ uri: src }} style={{ width, height }} {...props} />;
};

/* --- Export  ------------------------------------------------------------------------------ */

export default Img;
