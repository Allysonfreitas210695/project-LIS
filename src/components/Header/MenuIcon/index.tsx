import styled from 'styled-components';

interface MenuIconProps {
    open: boolean;
}

const MenuIcon = styled.div`
    font-size: 2rem;

    color: ${ (props: MenuIconProps) => props.open ? 'var(--color-grey)' : 'var(--color-white)'};
    z-index: 1;

    @media(min-width:769px){
        display:none;
    }
`;

export default MenuIcon;