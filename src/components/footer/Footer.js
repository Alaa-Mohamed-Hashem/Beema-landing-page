import { faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { Marginer } from '../marginer';

const FooterContainer = styled.div`
   width: 100%;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #1f1f1f;
   position: relative;
`;

const MotivationalText = styled.h1`
   font-size: 29px;
   font-weight: 500;
   line-height: 1.4;
   color: #fff;
   margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

const Footer = () => {
   return (
      <FooterContainer>
         <Marginer direction="vertical" margin="5em" />
         <Logo small />
         <Marginer direction="vertical" margin="1em" />
         <MotivationalText>Just say the magical word</MotivationalText>
         <MotivationalText>and we will do the rest</MotivationalText>
         <Marginer direction="vertical" margin="1em" />
         <Button>Start Your Project</Button>
         <Marginer direction="vertical" margin="5em" />
         <AccessibilityContainer>
            <PrivacyContainer>
               <Link>Privacy Policy</Link>
               <Link>Term of Service</Link>
               <Link>Contact</Link>
            </PrivacyContainer>
            <SocialContainer>
               <SocialIcon>
                  <FontAwesomeIcon icon={faTwitter} />
               </SocialIcon>
               <SocialIcon>
                  <FontAwesomeIcon icon={faLinkedin} />
               </SocialIcon>
            </SocialContainer>
         </AccessibilityContainer>
         <RightsReserved>&copy; 2020 Beema All rights reserved</RightsReserved>
      </FooterContainer>
   )
};

export default Footer;
