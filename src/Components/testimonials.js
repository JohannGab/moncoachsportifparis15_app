import React, { useState } from 'react';
import TESTIMONIALS from '../Constants/Testimonials'
import {
    StyledTestimonials,
    Container,
    ArrowWrapper,
    ArrowLeft,
    ContainerTestimonials,
    TestimonialsText,
    TestimonialsTextName,
    ArrowRight
}from './testimonials.style';
import Title from './title';

import themeColors from '../Constants/themeColors';

const Testimonials = () => {
    const [index, setIndex] = useState(0)

    const handleChangeRight = () => {
        if (index <= TESTIMONIALS.length -1){
            setIndex(index +1)
        } if (index === TESTIMONIALS.length -1) {
            setIndex(0)
        } else {
            return index
        }
    } 

    const handleChangeLeft = () => {
        if (index <= TESTIMONIALS.length -1){
            setIndex(index -1)
        } if (index === 0) {
            setIndex(TESTIMONIALS.length -1)
        } else {
            return index
        }
    } 

    return (
        <StyledTestimonials themeColors={themeColors.darkGrey}>
            <Title 
                titleName='Avis client'
                ColorText={themeColors.grey}
                ColorTitle={themeColors.darkGrey}
            />
            <Container>
                <ArrowWrapper>
                    <ArrowLeft themeColors={themeColors} onClick={handleChangeLeft}/>
                        <ContainerTestimonials>
                            <TestimonialsText>{TESTIMONIALS[index].text}</TestimonialsText>
                            <TestimonialsTextName>{TESTIMONIALS[index].name}</TestimonialsTextName>
                        </ContainerTestimonials>
                    <ArrowRight themeColors={themeColors} onClick={handleChangeRight}/>
                </ArrowWrapper>
            </Container>
        </StyledTestimonials>
    )
}

export default Testimonials