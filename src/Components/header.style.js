import styled from 'styled-components';
import themeColors from '../Constants/themeColors'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const Logo = styled.img`
    position: absolute;
    position: fixed;
    z-index: 1;
    top: 0.5rem;
    left: 0.5rem;
    @media screen and (max-width: 640px) {
        width: 7rem;
    }
`

export const LogoLink = styled.a`
    cursor: pointer;
    z-index: 1;
    &:hover{
        opacity: 0.8;
    }
`

export const Picture = styled.picture`
    -webkit-filter: grayscale(100%); /* Pour les navigateurs Chrome, Safari, Opera */
    filter: grayscale(100%); /* Firefox */
`

export const Source = styled.source``

export const Background = styled.img`
    max-width: 100%;
    max-height: 100%;
    position: relative;
`

export const ContainerText = styled.div`
    position: absolute;
    text-align: center;
    font-weight: bold;
    padding-bottom: 7rem;
    @media screen and (max-width: 640px) {
        padding-bottom: 1rem;
    }
`

export const Title = styled.h1`
    color: white;
    font-size: 3.5rem;
    margin-bottom: -1rem;
    text-shadow:0 1px 0 black, 0 -1px 0 black;
    @media screen and (max-width: 1024px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 640px) {
        font-size: 1.2rem;
        margin-bottom: -0.5rem;
    }
`
export const Text = styled.p`
    color: ${themeColors.yellow};
    font-size: 1.8rem;
    text-shadow:0 1px 0 black, 0 -1px 0 black;
    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 640px) {
        font-size: 0.6rem;
    }
`
export const LinkContact = styled.a``

export const Button = styled.button`
    background-color:  ${themeColors.darkGrey};
    color: ${themeColors.yellow};
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: none;
    font-weight: bold;
    transition : 1.0s ease all;

    &:hover {
        background-color:  ${themeColors.yellow};
        color: ${themeColors.darkGrey};
        transform: rotateY(360deg);
    }
    @media screen and (max-width: 640px) {
        font-size: 0.7rem;
    }
`