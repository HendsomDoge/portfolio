import React from 'react';
import { AiFillGithub, AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I suck at coding.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/HendsomDoge">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://reddit.com/user/hendsomdoge">
            <AiFillRedditCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/HendsomDoge">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;