import React from 'react';
import styled from 'styled-components';
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

export interface BannerProps{
   imageSrc?: string;
   imagemAlt?: string;
   title: string;
   description?: string;
   buttonLink?: string;
   buttonText?: string;
}

const Banner: React.FC<BannerProps> = (props) =>{
    return(
     <BannerContent>
        { props.imageSrc &&
        <BannerImg
        src= {props.imageSrc}
        alt= {props.imagemAlt}
        />
         }
        <Messegen {...props}/>
     </BannerContent>
    );
}

export default Banner;