import styled from 'styled-components';

export const StyledTestimonials = styled.div`
    border-top: dashed 0.1rem ${(themeColors) => themeColors.themeColors};
    height: 40rem;
    padding-top: 5rem;
    @media screen and (max-width: 640px) {
        padding: 0 1rem;
        height: 30rem;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    @media screen and (max-width: 640px) {
        padding-top: 0;
    }
`

export const ArrowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media screen and (max-width: 640px) {
        width: 100%;
    }
`

export const ArrowLeft = styled.div`
    cursor: pointer;
    width: 20px;
    height: 32px;
    background-color: ${(themeColors) => themeColors.themeColors.darkGrey};
    clip-path: polygon(100% 100%, 100% 0, 0 50%);
    &:hover {
        background-color: ${(themeColors) => themeColors.themeColors.yellow};
    }
`

export const ContainerTestimonials = styled.div`
    display: block;
    text-align: center;
    width: 80%;
`

export const TestimonialsText = styled.p`
    font-size: 1.4rem;
    font-style: italic;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
    }
`

export const TestimonialsTextName = styled.p`
    font-size: 1rem;
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`

export const ArrowRight = styled.div`
    cursor: pointer;
    width: 20px;
    height: 32px;
    background-color: ${(themeColors) => themeColors.themeColors.darkGrey};
    clip-path: polygon(0 0, 0 100%, 100% 50%);
    &:hover {
        background-color: ${(themeColors) => themeColors.themeColors.yellow};
    }
`