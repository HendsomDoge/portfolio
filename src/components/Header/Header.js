import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="https://hendsomdoge.netlify.app/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20' }}>
            <DiCssdeck size="3rem" /><Span> Portfolio </Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Languages</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/HendsomDoge" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.reddit.com/user/HendsomDoge" target="_blank">
          <AiFillRedditCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/HendsomDoge" target="_blank">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
