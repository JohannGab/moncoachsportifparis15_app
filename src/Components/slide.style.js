import styled from 'styled-components';

export const StyledSlide = styled.div`
    height: 500px;
    width: 100%;
    background-image: url('/Images/jump.min.jpg');
    background-repeat: repeat;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextMotivation = styled.h5`
    color: white;
    position: absolute;
    font-size: 3rem;
    right: 7rem;
    text-transform: uppercase;
    @media screen and (max-width: 640px) {
        font-size: 1.5rem;
        right: 3.5rem
    }
`