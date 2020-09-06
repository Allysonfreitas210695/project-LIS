import React from 'react';
import styled from 'styled-components';
import Img from '../../../src/assets/images/Home/imagem.svg';
import BannerImg from '../Header/BannerImg';


const BannerContent = styled.div`
   display: flex;
   justify-content: center;
   
`

export default  function Banner(){
    return(
     <BannerContent>
       <BannerImg 
        src={Img}
        alt= "imagem da home"
       />
     </BannerContent>
    );
}