import React from 'react';
import PageTemplate from '../pageTemplate';
import HomeImg from '../../assets/images/Home/imagem.svg'
import Projetos from '../../components/projetos';
import VideoDestaque from '../../components/VideoDestaque';
import SeeMoreButton from '../../components/SeeMoreButton';
import styled from 'styled-components';


const Title = styled.h1`
     color: var(--color-fundo);
     width: 100%;
     text-align: center;
     margin: 40px 0;
     font-family: 'Roboto', sans-serif;
     font-size: 2.4rem;
` 

export default function Home(){
    return (
      <PageTemplate
       imageSrc = {HomeImg}
       imagemAlt = "imagem da home"
       title = "Somos apaixonado por inovação  e fazemos disso nosso trabalho"
       buttonLink = "/projetos"
       buttonText = "projetos"
      >
       
       <Title>
          Confira nossos Projetos recentes
       </Title>

        <Projetos/>

            <SeeMoreButton to="./projetos">
                 Mais Projetos
            </SeeMoreButton>
            
        <Title>
          Video em Destaque
        </Title>

         <VideoDestaque/>
            
            <SeeMoreButton to="./videos">
                 Mais Videos
            </SeeMoreButton>

      </PageTemplate>
    );
}