import React from 'react';
import styled from 'styled-components';

const HeaderMain = styled.header`
background-color: var( --color-primary);
`;

export default function Header(){
    return(
       <HeaderMain>
         <h1> cabeçalho </h1>
       </HeaderMain>
    );
}