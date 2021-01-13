import React from 'react';
import Title from './title'
import {StyledQuality, Container} from './quality.style'
import BlocQuality from './blocQuality';
import themeColors from '../Constants/themeColors'

const Quality = () => {
    return (
        <StyledQuality>
            <Title 
                titleName='UN GAGE DE QUALITÉ'
                ColorText={themeColors.grey}
                ColorTitle={themeColors.darkGrey}
            />
            <Container>
                <BlocQuality titleQuality='title' textQuality='text sfldjglsdjlk fsdjlfkjsdlqkf  sfqlkqsdkjmqs sqlfdslkjsfdsqfmlkjs'/>
                <BlocQuality titleQuality='title' textQuality='text sfldjglsdjlk fsdjlfkjsdlqkf  sfqlkqsdkjmqs sqlfdslkjsfdsqfmlkjs'/>
                <BlocQuality titleQuality='title' textQuality='text sfldjglsdjlk fsdjlfkjsdlqkf  sfqlkqsdkjmqs sqlfdslkjsfdsqfmlkjs'/>
                <BlocQuality titleQuality='title' textQuality='text sfldjglsdjlk fsdjlfkjsdlqkf  sfqlkqsdkjmqs sqlfdslkjsfdsqfmlkjs'/>
            </Container>
        </StyledQuality>
    )
}

export default Quality