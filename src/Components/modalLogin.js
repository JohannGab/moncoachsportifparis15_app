import React from 'react'
import { Form } from './contact.style'
import {
    StyledModalLogin,
    Title,
    ButtonClose,
    Container,
    Input,
    InputSubmit
}  from './modalLogin.style'

const ModalLogin = ({ setIsOpen, isOpen }) => {
    return (
        <StyledModalLogin>
            <Title>SE CONNECTER</Title>
            <ButtonClose onClick={()=> setIsOpen(!isOpen)}>X</ButtonClose>
            <Form action="" method="GET" >
                <Container>
                    <Input placeholder="Email" type="email" name="email" required /> 
                </Container>
                <Container>
                    <Input placeholder="Password" type="password" name="password" required />
                </Container>
                <Container>
                    <InputSubmit type="submit" value="LET'S GO 🔥" />
                </Container>
            </Form>
        </StyledModalLogin>
    )
}

export default ModalLogin