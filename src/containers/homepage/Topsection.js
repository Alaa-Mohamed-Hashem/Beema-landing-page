import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../assets/pictures/company_team.jpg';
import Button from '../../components/button/Button';
import DownArrow from '../../components/downArrow/DownArrow';
import Logo from '../../components/logo/Logo';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/navbar/Navbar';

const slideLeft = keyframes`
   0% {
   opacity: 0;
    transform: translatex(-100%);
  }
  100% {
    transform: translatex(0%);
    opacity: 1;
  }
`;

const TopContainer = styled.div`
   width: 100%;
   height: 100vh;
   margin-bottom: 3px;
   padding: 0;
   background-image: url(${BackgroundImg});
   background-position: center;
   background-attachment: fixed;
   position: relative;
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background: rgba(55 ,55 ,55 ,0.79);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const MotivationalText = styled.h1`
   margin: 0;
   font-size: 34px;
   font-weight: 500;
   line-height: 1.4;
   color: #fff;
   text-align: center;
   animation: ${slideLeft} 1s linear;
`;

const DownArrowcontainer = styled.div`
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);
`;

const Topsection = () => {
   const scrollToNextSection = () => {
      scroller.scrollTo('ServicesSection', { smooth: true, duration: 1000 });
   };

   return (
      <Element name="Topsection">
         <TopContainer>
            <BackgroundFilter>
               <Navbar />
               <Marginer direction='vertical' margin='8em' />
               <Logo />
               <Marginer direction='vertical' margin='4em' />
               <MotivationalText>Software Development</MotivationalText>
               <MotivationalText>From the best in the industry</MotivationalText>
               <Marginer direction='vertical' margin='2em' />
               <Button>Start Your Project</Button>
               <DownArrowcontainer onClick={scrollToNextSection}>
                  <DownArrow />
               </DownArrowcontainer>
            </BackgroundFilter>
         </TopContainer>
      </Element>
   )
};

export default Topsection;
