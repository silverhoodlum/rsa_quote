import React from 'react';

import './small-title.styles.scss'

const SmallTitle = ({titleText, className}) => {
    return (
    <h3 className={className || "small-title"}>{titleText} </h3>)
}

export default SmallTitle;