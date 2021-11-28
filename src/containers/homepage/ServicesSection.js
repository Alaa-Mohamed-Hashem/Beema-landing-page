import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import OurService from '../../components/ourService/OurService';
import { SectionTitle } from '../../components/sectionTitle/SectionTitle';

import Service1Img from '../../assets/illustrations/web_development_.png';
import Service2Img from '../../assets/illustrations/mobile_phone.png';
import Service3Img from '../../assets/illustrations/bug_fixed.png';

const ServicesContainer = styled(Element)`
   width: 100%;
   min-height: 700px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 60px 0;
   border-bottom: 1px solid #dedede;
   background-color: #fafafa;
`;

const ServicesSection = (props) => {
   return (
      <ServicesContainer name="ServicesSection">
         <SectionTitle>Best Quality Software</SectionTitle>
         <Marginer direction="vertical" margin="5em" />
         <OurService
            title="Fully integrate services"
            description="We build and deliver fully integrated webapps with customized control panels that fit your compnay needs"
            imgUrl={Service1Img}
         />
         <OurService
            title="Mobile optimized"
            description="We build and deliver fully integrated webapps with customized control panels that fit your compnay needs"
            imgUrl={Service2Img}
            isReversed
         />
         <OurService
            title="Quality is our priority"
            description="We have teams of professional developers, designers
            and managers that ensures delivering the best 
            software quality for your company"
            imgUrl={Service3Img}
         />
      </ServicesContainer>
   )
};

export default ServicesSection;
