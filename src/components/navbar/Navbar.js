import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { Marginer } from '../marginer';

const NavbarConatiner = styled.div`
   width: 100%;
   height: 50px;
   padding: 0 2em;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const BrandContainer = styled.div`

`;

const AccessibiltyContainer = styled.div`
   display: flex;
   flex-direction: row;
`;

const LoginButton = styled(Button)`
   background-color: transparent;
   border: none;
   
   &:hover {
      background-color: transparent;
      border: none;
      color: rgb(200, 200, 200);
   };
`;

const Navbar = () => {
   return (
      <NavbarConatiner>
         <BrandContainer>
            <Logo inline />
         </BrandContainer>
         <AccessibiltyContainer>
            <Button small>Get Started</Button>
            <Marginer direction='horizontal' margin="8px"/>
            <LoginButton small>Login</LoginButton>
         </AccessibiltyContainer>
      </NavbarConatiner>
   )
};

export default Navbar;