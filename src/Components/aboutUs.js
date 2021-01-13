import React from 'react';
import Title from './title';
import {TEXTABOUTUS} from '../Constants/textAboutUS'

import { Container, Text } from './aboutUs.style'
import themeColors from '../Constants/themeColors'

const AboutUs = () => {
    return (
        <Container>
            <Title 
                titleName='QUI SOMMES-NOUS' 
                ColorText={themeColors.darkGrey}
                ColorTitle={themeColors.grey}
            />
            <Text>{TEXTABOUTUS}</Text>
        </Container>
    )
}

export default AboutUs