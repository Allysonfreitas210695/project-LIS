import styled from 'styled-components';

const ListMenu = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;

    li{
        color: var(--color-grey);
        margin-bottom: 1rem;
        margin-right: 4rem;
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
    }

    @media(min-width: 768px){
        display: flex;
        margin: 0;

        li{
            margin-left: 1rem;
            margin-bottom: 0;
            color: var(--color-white);
        }
    }

`


export default ListMenu;

