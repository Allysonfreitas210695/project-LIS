import React from 'react';
import styled from 'styled-components';
import Page from '../page';

const Pagecontainer = styled.main`
    width: 90%;
`

const Container: React.FC = (props) =>{
    return(
      <Page>
          <Pagecontainer>
              {props.children}
          </Pagecontainer>
      </Page>
    );
}

export default Container;