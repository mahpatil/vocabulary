import React from "react";
import Size from "../../foundation/Size";
interface ImageProps {
    src: string;
    width?: keyof typeof Size;
    height?: keyof typeof Size;
}
declare const Image: React.FunctionComponent<ImageProps>;
export default Image;
