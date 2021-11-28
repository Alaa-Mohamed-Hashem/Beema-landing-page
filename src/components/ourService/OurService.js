import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
   margin-bottom: 5em;
   flex-wrap : wrap-reverse;

   @media screen and (max-width: 480px) {
      justify-content: center;
   }
`;

const ServiceImg = styled.img`
   width: 18em;
   height: 14em;
   margin: auto;

   @media screen and (max-width: 480px) {
      width: 15em;
      height: 12em;
   }
`;

const DescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 60%;
   align-items: center;

   @media screen and (max-width: 480px) {
      max-width: 100%;
   }
`;

const Title = styled.h2`
   color: #000;
   font-size: 28px;
   font-weight: 700;
   margin: 5px 0;

   @media screen and (max-width: 480px) {
      margin-top: 2em;
   }
`;

const Details = styled.p`
   color: #7A7A7A;
   font-size: 18px;
   text-align: center;
   max-width: 57%;

   @media screen and (max-width: 480px) {
      width: 100%;
   }
`;

const OurService = (props) => {
   const { imgUrl, title, description, isReversed } = props;

   return (
      <ServiceContainer isReversed={isReversed}>
         <DescriptionContainer>
            <Title>{title}</Title>
            <Details>{description}</Details>
         </DescriptionContainer>
         <ServiceImg src={imgUrl} />
      </ServiceContainer>
   );
};

export default OurService;
