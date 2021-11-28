import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';

import 'pure-react-carousel/dist/react-carousel.es.css';

import User1Img from '../../assets/pictures/profile_picture_1.jpg';
import User2Img from '../../assets/pictures/profile_picture_2.jpg';
import User3Img from '../../assets/pictures/profile_picture_3.jpg';
import User4Img from '../../assets/pictures/profile_picture_4.jpeg';
import { useMediaQuery } from 'react-responsive';

const ReviewsContainer = styled(Element)`
   /* height: 700px; */
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 0px;
   padding-bottom: 80px;
   border-bottom: 1px solid #dedede;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
   width: 50%;
   cursor: pointer;
   
   @media screen and (max-width: 480px) {
      width: 100%;
   };
`;

const StyledSlide = styled(Slide)`
   .carousel__inner-slide {
      display: flex;
      justify-content: center;
   }
`;

const StyledDotGroup = styled(DotGroup)`
   display: flex;
   justify-content: center;

   Button {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #E4E4E4;
      border: none;
      outline: none;
      &:not(:last-of-type) {
         margin-right: 3px; 
      }
   };
   
   .carousel__dot--selected {
      background-color: #C4C4C4;
   };
`;

const ReviewsSection = (props) => {
   const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

   return (
      <ReviewsContainer>
         <SectionTitle>What others are saying about us</SectionTitle>
         <Marginer direction="vertical" margin="4em" />
         <StyledCarouselProvider naturalSlideWidth={200} naturalSlideHeight={250} totalSlides={4} visibleSlides={isMobile ? 1 : 2}>
            <Slider>
               <StyledSlide index={0}>
                  <ReviewCard
                     reviewText=' I very much enjoyed working with Beema and the team - 
                     they have an excellent grasp of their subject, and have created something great for us.'
                     username='John coner'
                     userImgUrl={User1Img}
                  />
               </StyledSlide>
               <StyledSlide index={1}>
                  <ReviewCard
                     reviewText=' I very much enjoyed working with Beema and the team - 
                     they have an excellent grasp of their subject, and have created something great for us.'
                     username='Megan borguer'
                     userImgUrl={User2Img}
                  />
               </StyledSlide>
               <StyledSlide index={2}>
                  <ReviewCard
                     reviewText=' I very much enjoyed working with Beema and the team - 
                     they have an excellent grasp of their subject, and have created something great for us.'
                     username='John coner'
                     userImgUrl={User3Img}
                  />
               </StyledSlide>
               <StyledSlide index={3}>
                  <ReviewCard
                     reviewText=' I very much enjoyed working with Beema and the team - 
                     they have an excellent grasp of their subject, and have created something great for us.'
                     username='John coner'
                     userImgUrl={User4Img}
                  />
               </StyledSlide>
            </Slider>
            <StyledDotGroup />
         </StyledCarouselProvider>
      </ReviewsContainer>
   )
};

export default ReviewsSection;