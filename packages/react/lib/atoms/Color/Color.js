import React from 'react';
import Spacing from '../../foundation/Spacing2.js';

const Color = ({ hexCode, width = Spacing.xxl, height = Spacing.sm }) => {
    const className = `voc-width-${width} voc-height-${height}`;
    return React.createElement("div", { className: className, style: {
            backgroundColor: hexCode
        } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
