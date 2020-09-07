import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/Home/imagem.svg';
import BannerImg from '../BannerImg';
import Messegen from '../BannerMessege';


const BannerContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

`

export default  function Banner(){
    return(
     <BannerContent>
        <BannerImg
        src={Img}
        alt= "imagem da home"
        />
        <Messegen/>
     </BannerContent>
    );
}