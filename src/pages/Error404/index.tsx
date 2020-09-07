import React from 'react';
import PageTemplate from '../pageTemplate';
import ErrorImg from '../../assets/images/Error404/erro.svg';

export default function Erro404(){
    return(
        <PageTemplate
        imageSrc = {ErrorImg}
        imagemAlt = "logo de erro na rota"
        title = "Error 404"
        description = "página não encontrada"
        >
            <h1>Error 404</h1>
        </PageTemplate>
    );
}