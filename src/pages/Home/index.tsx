import React from 'react';
import PageTemplate from '../pageTemplate';
import HomeImg from '../../assets/images/Home/imagem.svg'
import Projetos from '../../components/projetos';

export default function Home(){
    return (
      <PageTemplate
       imageSrc = {HomeImg}
       imagemAlt = "imagem da home"
       title = "Somos apaixonado por inovação  e fazemos disso nosso trabalho"
       buttonLink = "/projetos"
       buttonText = "projetos"
      >
        <Projetos/>
      </PageTemplate>
    );
}