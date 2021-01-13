import React from 'react';
import {StyledCitation, Container, ImageCitation, TextCitation} from './citation.style'

const Citation = () => {
    return (
        <StyledCitation>
            <Container>
                <ImageCitation src='./Images/direction.min.png' alt='photo qui montre une direction'/>
                <TextCitation>" Lorsqu'on regarde dans la bonne direction, <br></br>il ne reste plus qu'à avancer "</TextCitation>    
            </Container>
        </StyledCitation>
    )
}

export default Citation