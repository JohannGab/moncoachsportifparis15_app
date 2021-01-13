import React from 'react'
import {StyledProduct, Container} from './product.style'
import Wrapper from './wrapper'

const Product = () => {
    return (
        <StyledProduct>
            <Container>
                <Wrapper url='https://www.toute-la-franchise.com/images/zoom/fitness.jpg' subtitle='Coaching' title='Coaching individuel' />
                <Wrapper url='https://www.bodyfeeling.fr/s/cc_images/teaserbox_20765453.jpg?t=1535387899' subtitle='Training' title='Small group training' />
                <Wrapper url='https://evofitness.ch/wp-content/uploads/2019/06/Battle-ropes-Cordes-ondulatoires-EVO-Fitness-1200x675.jpg' subtitle='Bien-être' title='Yoga / Pilates' />
            </Container>
        </StyledProduct>
    )
}

export default Product