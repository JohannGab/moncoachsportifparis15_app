import React from 'react';
import {
    StyledWrapper,
    ContainerImage,
    Image,
    ContainerText,
    Subtitle,
    Title
} from './wrapper.style';

const Wrapper = ({subtitle, title, url}) => {
    return (
        <StyledWrapper>
            <ContainerImage>
                <Image src={url} alt='' />
            </ContainerImage>
            <ContainerText>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
            </ContainerText>
        </StyledWrapper>
    )
}

export default Wrapper