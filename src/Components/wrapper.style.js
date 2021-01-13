import styled from 'styled-components';
import themeColors from '../Constants/themeColors';

export const StyledWrapper = styled.div`
    margin: 0 1rem;
    width: 20rem;
    display: block;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 640px) {
        margin: 3rem 0;
    }
`

export const ContainerImage = styled.div`
    
`

export const Image = styled.img`
    width: 100%;
    border-bottom: solid 0.1px black;
    max-height: 11rem;//a modifier 
    `

export const ContainerText = styled.div`
    text-align: center;
    @media screen and (max-width: 640px) {
        padding-bottom: 0.1rem;
    }
`

export const Subtitle = styled.h4`
    color: ${themeColors.yellow};
    text-transform: uppercase;
    font-size: 0.8rem;
`

export const Title = styled.h3`
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: -0.6rem;
`