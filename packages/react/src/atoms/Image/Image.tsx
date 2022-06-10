import React from "react";
import Size from "../../foundation/Size"

interface ImageProps {
    src: string;
    width?: keyof typeof Size;
    height?: keyof typeof Size;
}


const Image: React.FunctionComponent<ImageProps> = ({src, width=Size.md, height=Size.md}) => {
    const className = `voc-width-img-${width} voc-height-img-${height}`

    return <img className={className} src={src} />

}

export default Image