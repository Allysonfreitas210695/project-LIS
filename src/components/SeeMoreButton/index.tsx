import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SeeMoreButton = styled(Link)`
    margin: 10px auto;
    display: flex;
    background-color: var(--color-primary);
    width: 90%;
    height: 6rem;
    border: 0;
    border: 2px solid var(--color-grey);
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    margin-bottom: 20px;

    @media(min-width: 768px){
        margin-right: 0;
        width: 200px;
    }
`

export default SeeMoreButton;