import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { Marginer } from "../../components/marginer";
import MoreAboutSection from "./MoreAboutSection";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";
import Topsection from "./Topsection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <PageContainer>
      <Topsection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <ReviewsSection />
      <MoreAboutSection />
      {/* <Marginer direction="vertical" margin="8em" /> */}
      <Footer />
    </PageContainer>
  )
};

export default Homepage;
