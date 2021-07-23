import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from "./Menu";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  z-index: 10;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? '#f59e24' : '#222222'};
    border-radius: 0.3rem;
    transform-origin: 23%;
    transition: all 0.3s linear;


    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
            </StyledBurger>

            <Menu openMobile={open}/>

        </>
    );
}

export default MobileMenu;