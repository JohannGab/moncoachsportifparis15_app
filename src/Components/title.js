import React from 'react';
import { StyledTitle, TitleText, Line } from './title.style'

const Title = ({titleName, ColorText, ColorTitle}) => {
    return (
        <StyledTitle>
            <TitleText style={{color: ColorTitle}}>{`✨ ${titleName} ✨ `}</TitleText>
            <Line style={{color: ColorText}}>.............</Line>
        </StyledTitle>
    )
}

export default Title