import styled from 'styled-components'

export const StyledProduct = styled.div`
    @media screen and (max-width: 640px) {
        padding: 0 0 1rem 0;
        display: flex;
        justify-content: center;
    }
`

export const Container = styled.div`
    position: relative;
    z-index: 1;
    top: -4rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 640px) {
        display: block;
        position: none;
        top: 0;
    }
`
