import React from 'react';
import styled from 'styled-components';
import { PROJETOS } from '../../Data/projetos';
import Card from '../ProjetosCard';

const ProjetoList = styled.section`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
`

const ProjetoNames = styled.h2`
    color: var(--color-grey);
    font-size: 1.6rem;
    margin: 10px 0;
    font-weigth: normal;
`

const Description = styled.p`
    color: var(--color-grey);
    height: 150px;
    overflow: hidden;
`

const Image = styled.img`
   heigth: 400px;
   width: 600px;
`

export default function Projetos(){
    return(
       <ProjetoList>
           {
               PROJETOS.filter(p => p.featured === true).map((projeto) => {
                   return(
                    <Card key={projeto.name}>
                        <Image src={require( `../../assets/${projeto.image}`)} alt={projeto.name}/>
                        <ProjetoNames>
                            {projeto.name}
                        </ProjetoNames>
                        <Description>
                            {projeto.description}
                        </Description>
                    </Card>
                   )
               })
           }
       </ProjetoList>
    );
}