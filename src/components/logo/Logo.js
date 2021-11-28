import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import BeemaLogo from '../../assets/logo/logo_croped.png';
import { theme } from '../../theme';

const fadeUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LogoContainer = styled.div`
   display: flex;
   flex-direction: ${({ inline }) => inline ? 'row' : 'column'};
   align-items: center;
   animation: ${fadeUp} 1s linear;
`;

const LogoImg = styled.img`
   width: 8em;
   height: 8em;

   ${({ inline }) => inline && css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
   `};

   ${({ small }) => small && css`
      width: 4.8em;
      height: 4.8em;
   `};
`;

const LogoText = styled.div`
   margin-top: ${({ inline }) => inline ? 0 : '6px'};
   font-size: ${({ inline, small }) => inline ? '18px' : small ? '22px' : '40px'};
   color: ${({ inline }) => inline ? '#fff' : theme.primary};
   font-weight: bold;
`;

const Logo = (props) => {
   const { inline, small } = props;

   return (
      <LogoContainer inline={inline}>
         <LogoImg src={BeemaLogo} inline={inline} small={small} />
         <LogoText inline={inline} small={small}>Beema</LogoText>
      </LogoContainer>
   )
};

export default Logo;
