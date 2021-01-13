import React from 'react';
import {StyledBlocQuality, ContainerImg, Icon, Title, Text} from './blocQuality.style';

const BlocQuality = ({titleQuality, textQuality}) => {
    return (
        <StyledBlocQuality>
            <ContainerImg>
                <Icon src='/Images/SVG/calendar-alt-regular.svg' />
            </ContainerImg>
                <Title>{titleQuality}</Title>
                <Text>{textQuality}</Text>
        </StyledBlocQuality>
    )
}

export default BlocQuality