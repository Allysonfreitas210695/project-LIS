import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer/container';
import {BannerProps} from '../../components/Header/Banner'
import Container from '../../components/container';

const PageTemplate: React.FC<BannerProps> = (props) => {
    return(
        <>
        <Header {...props}/>
        <Container>
            {props.children}
        </Container>
        <Footer/>
        </>
    );
}

export default PageTemplate;