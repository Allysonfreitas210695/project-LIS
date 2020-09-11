import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Banner, {BannerProps}  from '../Banner';

const HeaderMain = styled.header`
background-color: var( --color-primary);
`;

const Header: React.FC<BannerProps> = (props) =>{
    return(
       <HeaderMain>
         <TopBar/>
         <Banner {...props}/>
       </HeaderMain>
    );
}

export default Header;