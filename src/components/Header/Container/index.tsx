import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';

const HeaderMain = styled.header`
background-color: var( --color-primary);
`;

export default function Header(){
    return(
       <HeaderMain>
         <TopBar/>
       </HeaderMain>
    );
}