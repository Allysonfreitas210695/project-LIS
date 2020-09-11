import React from 'react';
import styled from 'styled-components';
import { FiInstagram, FiMail} from 'react-icons/fi';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';


const FooterData = styled.div`
    width: 100%;
    margin-bottom: 10px;
    heigth: 160px;
    text-align: center;
    color: var(--color-white);
    padding: 10px 0px;
    font-family: 'Roboto', sans-serif;
    
`

const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${FooterData}{
        border-bottom: 1px solid var(--color-grey);
    }
`

const Infor = styled.div`

`

const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 10px;
`
const Lista = styled.ul`
    list-style: none;
    font-size: 1.6rem;
    width: 350px;

    li{
        line-height: 1.6;
    }
`

const SocialNetWorks = styled.ul`
    list-style: none;
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`

const Links = styled.a`
   text-decoration: none;
   color: var(--color-white);
   font-size: 1.6rem;
   margin-left: 2px;
   font-family: 'Roboto', sans-serif;

   :hover{
       color: var(--color-grey);
   }
`

const Icon = styled.span`
    font-size: 2.0rem;
    color: var(--color-white);
    margin-right: 10px;
`

const Email = styled.a`
    color: var(--color-white);
    text-decoration: none;

    :hover{
        color: var(--color-grey);
    }
`

const Direitos = styled.p`
    color: var(--color-white);
    font-size: 1.6rem;
    height: 50px;
    font-family: 'Roboto', sans-serif;
`

export default function FooterContent(){
    return(
        <Content>
            <Infor>
                <FooterData>
                     <Title>
                        Nossos Parceiros
                     </Title>
                        <Lista>
                            <li>Universidade Rural do Semi-Árido</li>
                            <li>Bacharelado em Tecnologia de Informação</li>
                            <li>Engenharia de <i>Software</i></li>
                        </Lista>
                </FooterData>
                <FooterData>
                     <Title>
                         Desenvolvedores
                     </Title>
                        <Lista>
                                <li>Rennan Santana</li>
                                <li>Fernando Dutra Ribeiro</li>
                                <li>Emanuel  Bruno</li>
                                <li>Reudismam Rolim</li>
                        </Lista>
                </FooterData>
                <FooterData>
                     <Title>
                         Informações
                     </Title>
                        <Lista>
                           <li>
                               <Icon>
                                   <GoLocation/>
                               </Icon>
                                Rodovia BR-226, s/n, Pau dos Ferros, 59900-000
                           </li>
                           <li>
                               <Icon>
                                   <FiMail/>
                               </Icon>
                               <Email href="mailto:lis.ufersa@gmail.com">
                                   lis.ufersa@gmail.com
                               </Email>
                           </li>
                        </Lista>
                </FooterData>
            </Infor> 
            <SocialNetWorks>
                <li>
                    <Icon>
                      <FiInstagram/>
                    </Icon>
                      <Links href="https://www.instagram.com/lis.ufersa"> Lis.ufersa</Links>
                </li>
                <li>
                   <Icon>
                       <FaTwitter/>
                   </Icon>
                   <Links href="https://www.twitter.com/lis_ufersa">lis_ufersa</Links>
                </li>
                <li>
                   <Icon>
                       <FaFacebookF/>
                   </Icon>
                     <Links href="https://www.facebook.com/lis.ufersa">lis.ufersa</Links>
                </li>
            </SocialNetWorks>

            <Direitos>
                @todos os direitos reservados
            </Direitos>
        </Content>
    )
} 