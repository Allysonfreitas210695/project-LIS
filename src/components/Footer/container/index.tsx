import React from 'react';
import styled from 'styled-components';
import FooterContent from '../content'

const FooterContainer = styled.footer`
    background-color: var(--color-fundo);
`

export default function Footer(){
    return(
     <FooterContainer>
         <FooterContent />
     </FooterContainer>
    );
}

