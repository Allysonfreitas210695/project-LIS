import React from 'react';
import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi';
import MenuIcon from '../MenuIcon';
import ListMenu from '../MenuList';


const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;


    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 10px;
    }
`

const MenuHeaderNavigtion = styled.nav`
    background-color: var(--color-white);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;

    @media(min-width: 768px){
          background-color: transparent;
          display: flex;
          position: static;
          height: 100%;
          flex: 1;
          justify-content: space-between;
    }
`



export default function Menu(){
    return(
        <MenuContainer>
            <MenuIcon>
                <FiMenu />
            </MenuIcon>

           <MenuHeaderNavigtion>
               <ListMenu>
                   <li>Inicio</li>
                    <li>Pesquisadores</li>
                    <li>Publicações</li>
                    <li>projetos</li>
                    <li>Portifólio</li>
                    <li>Notícias</li>
                    <li>Editais</li>
                    <li>Parceiros</li>
                    <li>Contatos</li>
                    <li>Sobre</li>
               </ListMenu>
               <ListMenu>
                 <li>Sair</li>
                 <li>Perfil</li>
               </ListMenu>
           </MenuHeaderNavigtion>

        </MenuContainer>
    );
};