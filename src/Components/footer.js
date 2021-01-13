import React from 'react'
import { StyledFooter, Copyright, Link } from './footer.style'

const Footer = () => {
    const myDate = new Date();
    return (
        <StyledFooter>
            <Copyright>
                Copyright © {`${myDate.getFullYear()} `} 
                <Link href="">
                        moncoachsportifparis15.fr
                </Link >
                {` / `}
                <Link  href="https://johann-gabelle-dev.fr"
                    target="_blank">
                    by Johann Gabelle
                </Link >
            </Copyright>
        </StyledFooter>
    )
}

export default Footer