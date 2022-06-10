import React from 'react';
import Size from '../../foundation/Size2.js';

const Image = ({ src, width = Size.md, height = Size.md }) => {
    const className = `voc-width-img-${width} voc-height-img-${height}`;
    return React.createElement("img", { className: className, src: src });
};

export { Image as default };
//# sourceMappingURL=Image.js.map
