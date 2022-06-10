import React from "react";
import ReactDOM from "react-dom"
import "@vocabulary/scss/lib/Button.css"
import { Color, Image } from '@vocabulary/react'
import "@vocabulary/scss/lib/Utilities.css"

ReactDOM.render(
    <div>
        <div>COLOR</div>
        <Color hexCode='#000'/>
        <div>IMAGE</div>
        <Image src='https://dummyimage.com/1024x720/660966/fff.png&text=test'/>
    </div>,
    document.querySelector('#root')

)