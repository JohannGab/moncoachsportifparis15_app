import styled from 'styled-components';
import themeColors from '../Constants/themeColors';

export const Container = styled.div`
    padding-bottom: 6rem;
    background-color: ${themeColors.darkGrey};
    padding-top: 3rem;
    margin-top: -0.2rem;
    border-top: dashed 0.1rem ${themeColors.yellow};
`

export const Text = styled.p`
    color: ${themeColors.grey};
    text-align: center;
    padding: 0 20rem;
    @media screen and (max-width: 1024px) {
        padding: 0 10rem;
    }
    @media screen and (max-width: 640px) {
        padding: 0 1rem;
    }
`