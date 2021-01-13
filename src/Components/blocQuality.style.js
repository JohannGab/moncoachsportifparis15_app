import styled from 'styled-components';
import themeColors from '../Constants/themeColors'

export const StyledBlocQuality = styled.div`
    margin: 0 2rem;
    display: block;
    text-align: center;
    width: 15rem;
    @media screen and (max-width: 640px) {
        margin: 0 0 5rem 0;
        width: 100%;
    }
`
export const ContainerImg = styled.div`
    width: 100%;
    color: ${themeColors.yellow};
`

export const Icon = styled.img`
    width: 30%;
    transition : 1.0s ease all;
    &:hover {
        transform: rotateY(360deg);
    }
    @media screen and (max-width: 640px) {
        width: 20%;
    }
`

export const Title = styled.h3`
    color: ${themeColors.darkGrey};
`

export const Text = styled.p`
    color: ${themeColors.darkGrey};
`