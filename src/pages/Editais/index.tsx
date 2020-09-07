import React from 'react';
import PageTemplate from '../pageTemplate';
import EditaisImg from '../../assets/images/editais/imagem.svg';

export default function Editais(){
    return(
    <PageTemplate
     imageSrc = {EditaisImg}
     imagemAlt = "imagem de editais"
     title = "editais"
     description = "Acompanhe nossa postagens e fique por dentro do que rola aqui no LIS, e  claro que tem toques de aprendizado"
    >
        <h1>Editais</h1>
    </PageTemplate>
    );
}