import React from "react";
import Spacing from '../../foundation/Spacing'
interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing
}

const Color: React.FunctionComponent<ColorProps> = ({hexCode, width=Spacing.xxl, height=Spacing.sm}) => {
    const className = `voc-width-${width} voc-height-${height}`

    return <div className={className} style={{ 
        backgroundColor: hexCode
    }}>

    </div>
}

export default Color