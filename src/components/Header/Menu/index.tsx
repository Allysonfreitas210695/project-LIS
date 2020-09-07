import React, {useState} from 'react';
import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi';
import {CgCloseR} from 'react-icons/cg';
import MenuIcon from '../MenuIcon';
import ListMenu from '../MenuList';

interface MeusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    flex: 1;


    & ${MenuIcon} {
        position: fixed;
        right: 20px;
        top: 20px;
    }
`

const MenuHeaderNavigtion = styled.nav`
    background-color: var(--color-white);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props: MeusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 2s;

    @media(min-width: 768px){
          transform: none;
          background-color: transparent;
          display: flex;
          position: static;
          height: 100%;
          flex: 1;
          justify-content: space-between;
    }
`



export default function Menu(){
    const [open, setOpen] = useState(false);
    return(
        <MenuContainer>
            {!open &&
            <MenuIcon open={open} onClick={() => setOpen(!open)}>
                <FiMenu />
            </MenuIcon>
            }

            {open &&
           <MenuIcon open={open} onClick={() => setOpen(!open)}>
              <CgCloseR/>
           </MenuIcon>
            }

           <MenuHeaderNavigtion open = {open}>
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