import styled from 'styled-components';
import themeColors from '../Constants/themeColors';

export const StyledModalLogin = styled.div`
    background-color: ${themeColors.darkGrey};
    border: none;
    border-radius: 0.5rem;
    position: absolute;
    top: 2px;
    width: 16rem;
    right: 0.1px;
    text-align: center;
    @media screen and (max-width: 640px) {
        right: -1rem;
    }
`

export const Title = styled.h5`
    color: ${themeColors.grey};
    font-size: 0.9rem;
`

export const ButtonClose = styled.button`
    background-color: ${themeColors.grey};
    color: ${themeColors.darkGrey};
    border: none;
    border-radius: 0.5rem;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    font-size: 0.8rem;
    &:hover {
        background-color: ${themeColors.yellow};
    }
`

export const Container = styled.div`
`

export const Input = styled.input`
    background-color: ${themeColors.darkGrey};
    color: ${themeColors.grey};
    border: solid 1px ${themeColors.grey};
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
`

export const InputSubmit = styled.input`
    background-color: ${themeColors.darkGrey};
    color: ${themeColors.grey};
    border: solid 1px ${themeColors.grey};
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
`