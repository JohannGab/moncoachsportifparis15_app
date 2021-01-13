import React from 'react';
import Link from 'next/link';

import {
    Container,
    Logo,
    LogoLink,
    Picture,
    Source,
    Background,
    ContainerText,
    Title,
    Text,
    LinkContact,
    Button
} from './header.style'
import Login from './login';

const Header = () => {
    return (
        <Container>
            <Link href="/">
                <LogoLink>
                    <Logo src='/Images/logoHomeMCSP15.png' alt='logo du site'/>
                </LogoLink>
            </Link>
            <Picture>
                <Source media="(max-width: 40em)" srcSet="/Images/homePage1mobile.min.jpg 1x"/>
                <Background src='/Images/homePage1.min.jpg' alt='photo des coachs'/>
            </Picture>
            <Login />
            <ContainerText>
                <Title>Mon Coach Sportif Paris 15</Title>
                <Text>Ne limite pas tes défis, défie tes limites</Text>  
                <LinkContact href='#contact'>
                    <Button>CONTACTEZ-NOUS</Button>
                </LinkContact>
            </ContainerText>
        </Container>
    )
}

export default Header