import React from 'react'
import Title from './title'
import {
    StyledContact,
    Form,
    Label,
    ContainerInput,
    Input,
    InputMessage,
    InputSend
} from './contact.style'
import themeColors from '../Constants/themeColors';

const ContactHome = ({ url }) => {
    return (
        <StyledContact id={url}>
        <Title titleName='CONTACT' ColorText={themeColors.darkGrey}/>
        <Form action="https://formspree.io/johann.gabelle@outlook.fr" method="POST">
            <Label>
                Prénom & Nom <span style={{color: 'red'}}>*</span>
            </Label>
            <ContainerInput>
            <Input type="text" name="name" id="name" required />
            </ContainerInput>
            <Label>
                Email <span style={{color: 'red'}}>*</span>
            </Label>
            <ContainerInput>
            <Input type="text" name="email" id="email" required />
            </ContainerInput>
            <Label>
                Téléphone
            </Label>
            <ContainerInput>
            <Input type="text" name="telephone" id="telephone" />
            </ContainerInput>
            <Label>
                Objet
            </Label>
            <ContainerInput>
            <Input type="text" name="objet" id="objet" />
            </ContainerInput>
            <Label>
                Message <span style={{color: 'red'}}>*</span> 
            </Label>
            <ContainerInput>
            <InputMessage type="text" name="message" id="message" />
            </ContainerInput>
            <ContainerInput>
                <InputSend type="submit" value="ENVOYER" />  
            </ContainerInput>
        </Form>
    </StyledContact>
    )
}

export default ContactHome;