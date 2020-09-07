import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MessageContainer = styled.div`
  width: 70%;
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.4;
`

const Title = styled.h1`
  font-size: 2.4rem;
`

const Description = styled.h2`
   font-weight: normal;
   margin: 10px 0;
`

const Button = styled(Link)`
    display: flex;
    border: 1px solid var(--color-grey);
    height: 4rem;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.8rem;
`  

export default function Messegen(){
    return(
     <MessageContainer>
         <Title>
             somos apaixonado por invocao e fazemos disso nosso trabalho
         </Title>
         <Description>
             Sabemos que o trabalho em grupo é inevitavel, para qualquer time!
         </Description>
         <Button to="/projetos">
             Projetos
         </Button>
     </MessageContainer>
    );
}
