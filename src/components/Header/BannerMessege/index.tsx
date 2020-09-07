import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BsBook} from 'react-icons/bs';
import './style.css'

export const MessageContainer = styled.div`
  width: 70%;
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.4;

  @media(min-width: 768px){
      width: 500px;
      display: flex;
      flex-direction: column;
      text-align: start;
      margin-left: 50px;
  }
`

const Title = styled.h1`
  font-size: 2.4rem;

  @media(min-width: 768px){
      font-size: 2.6rem;
  }
`

const Description = styled.h2`
   font-weight: normal;
   margin: 10px 0;
`

const Button = styled(Link)`
    display: flex;
    font-size: 1.2rem;
    border: 1px solid var(--color-grey);
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.8rem;

    @media(min-width: 768px){
        width: 200px;
        font-size: 1.6rem;
    }
`  

export default function Messegen(){
    return(
     <MessageContainer>
         <Title>
             somos apaixonado por invocao e fazemos disso nosso trabalho
         </Title>
         <Description>
             Sabemos que o trabalho em grupo é algo essencial para qualquer time, e conosco nao seria diferente!
         </Description>
         <Button to="/projetos">
           <BsBook className="afasta"/> Projetos
         </Button>
     </MessageContainer>
    );
}
