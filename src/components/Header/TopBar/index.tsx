import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";

const TopBarContainerStyled = styled.div`
    display:flex;
    align-items:center;
    background-color: var(--color-primary-dark);
    heigth:4rem;
`

export default function TopBarContainer(){
    return (
        <TopBarContainerStyled>

        <Logo/>

       </TopBarContainerStyled>
    );
}