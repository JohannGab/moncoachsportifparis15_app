import React from 'react';
import Link from 'next/link';
import ContactHome from '../src/Components/contact'

import { LogoLink, Logo } from '../src/Components/header.style'

const Contact = () => {
    return (
        <>
            <Link href="/">
                <LogoLink>
                    <Logo src='../Images/logoHomeMCSP15.png' alt='logo du site'/>
                </LogoLink>
            </Link>
            <ContactHome />
        </>
    )
}

export default Contact