import styled from 'styled-components';
import themeColors from '../Constants/themeColors'

export const StyledContact = styled.div`
    background-color: ${themeColors.darkGrey};
    text-align: center;
    color: white;
    padding: 2rem 0 5rem 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Label= styled.label`

`

export const ContainerInput = styled.div`
`

export const Input = styled.input`
    margin: 1rem 0;
    height: 2rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem ${themeColors.yellow};
    border-radius: 5rem;
    padding-left: 1rem;
    
    :focus {
        background-color: ${themeColors.yellow};
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`

export const InputMessage = styled.textarea`
    margin: 1rem 0;
    height: 10rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem ${themeColors.yellow};
    border-radius: 1rem;
    padding: 1rem;
    
    :focus {
        background-color: ${themeColors.yellow};
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`

export const InputSend = styled.input`
    font-size: 1rem;
    margin: 1rem 0;
    height: 2rem;
    width: 16rem;
    background-color: #DDDDDD;
    border: solid 0.2rem ${themeColors.yellow};
    border-radius: 5rem;
    color: ${themeColors.darkGrey};
    :focus {
        background-color: ${themeColors.yellow};
        outline:none;
        border: solid 0.2rem #C8CACA;
    }
`