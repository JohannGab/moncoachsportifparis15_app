import styled from 'styled-components';
import themeColors from '../Constants/themeColors';

export const StyledLogin = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        right: 0.3rem;
    }
`

export const Connexion = styled.p`
    color: white;
    font-size: 1.2rem;
    &:hover {
        color: ${themeColors.yellow};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`