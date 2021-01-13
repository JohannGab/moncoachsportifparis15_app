import styled from 'styled-components';
import themeColors from '../Constants/themeColors';

export const StyledFooter = styled.div`
    background-color: ${themeColors.darkGrey};
    color: ${themeColors.grey};
    text-align: center;
    padding-bottom: 0.1rem;
    border-top: solid 1px ${themeColors.yellow};
`

export const Copyright = styled.p`
    font-size: 1rem;
    @media screen and (max-width: 640px) {
            font-size: 0.7rem;
        }
`

export const Link = styled.a`
    text-decoration: none;
    &:hover {
        opacity: 0.6;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`