import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../pageTemplate';
import CriarContaImg from '../../assets/images/CriarConta/criarconta.svg';
import Input from '../../components/Input/input';


const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--color-primary);
`

const NameContainer = styled.div`

`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas); 
    border-radius: 50%;
    margin-top: 20px;
`

const Name = styled.div`

`


export default function CriarConta(){
    return(
        <PageTemplate
        imageSrc = {CriarContaImg}
        imagemAlt = "imagem da pagina criar conta"
        title = "Quase tudo pronto para se tornar um menbro"
        description = "Inseri seus dados cadastrais nos campos abaixos"
       >
           <Form>
                <FieldSet>
                    <Legend>
                        Seus dados
                    </Legend>
                    <NameContainer>
                        <Photo>

                        </Photo>
                        <Name>
                          <Input name="name" label="Nome"/>
                          <Input name="lastname" label="Sobrenome"/>
                        </Name>
                    </NameContainer>
                </FieldSet>
           </Form>

        </PageTemplate>

    );
}