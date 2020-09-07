import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/Home/imagem.svg';
import BannerImg from '../BannerImg';
import Messegen, {MessageContainer} from '../BannerMessege';


const BannerContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
  
   @media(min-width: 768px){
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-areas: "mensagem figura";

   }
   & ${BannerImg}{
      grid-area: figura;
      justify-self: end;
   }
   & ${MessageContainer}{
      grid-area: mensagem;
   }

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