import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";
import MenuIcon from '../Menu';

const TopBarContainerStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--color-primary-dark);
    height: 6rem;
`

export default function TopBarContainer(){
    return (
        <TopBarContainerStyled>
        <Logo/>
        <MenuIcon/>
       </TopBarContainerStyled>
    );
}