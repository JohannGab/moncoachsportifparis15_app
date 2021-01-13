import React, { useState } from 'react';
import ModalLogin from './modalLogin';

import {StyledLogin, Connexion} from './login.style';

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledLogin>
            <Connexion onClick={()=> setIsOpen(!isOpen)} >Connexion</Connexion>
            {isOpen 
                ? <ModalLogin setIsOpen={setIsOpen} isOpen={isOpen} />
                : null
            }
        </StyledLogin>
    )
}

export default Login