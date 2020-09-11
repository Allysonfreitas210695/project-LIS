import React from 'react';
import styled from 'styled-components';
import FooterContent from '../content'

const FooterContainer = styled.footer`
    background-color: var(--color-fundo);

    @media(min-width: 768px){
        display: flex;
        justify-content: center;
    }
`

export default function Footer(){
    return(
     <FooterContainer>
         <FooterContent />
     </FooterContainer>
    );
}

