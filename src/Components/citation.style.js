import styled from 'styled-components';
import themeColors from '../Constants/themeColors'

export const StyledCitation = styled.div`
    background-color: ${themeColors.darkGrey};
    padding: 5rem 0;
    text-align: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 1024px) {
        display: block; 
    }
`

export const ImageCitation = styled.img`
    width: 30rem;
    margin-left: 2rem;
    border-radius: 50%;
    border: solid 0.4rem ${themeColors.yellow};
    transition : 1.3s ease all;
    &:hover {
        width: 40%;
    }
    @media screen and (max-width: 640px) {
        margin-left: 0;
        width: 18rem;
        &:hover {
            width: 22rem;;
        }
    }
`

export const TextCitation = styled.p`
    color: ${themeColors.grey};
    font-size: 1.8rem;
    padding: 0 7rem;
    width: auto;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        padding: 3rem 0 0 0;
        width: 100%;
    }
`