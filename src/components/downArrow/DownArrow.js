import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ArrowContainer = styled.div`
   width: 46px;
   height: 46px;
   border-radius: 50%;
   /* background-color: rgba(113, 113, 113, 0.48); */
   background: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
   /* border: 2px solid transparent; */
   border: 1px solid #fff;
   transition: all 250ms ease-in-out;
   cursor: pointer;

   &:hover {
      border: 1px solid ${theme.primary};
   }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 29px;
`;

const DownArrow = () => {
   return (
      <ArrowContainer>
         <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown} />
         </ArrowIcon>
      </ArrowContainer>
   )
};

export default DownArrow;
