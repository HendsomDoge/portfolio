import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hey there! I am Hendsom Doge. My projects may seem cool and stuff but they are pretty simple to make (not for me though). If you think that I am good at coding, then you're very much mistaken, I am just a hobbyist who likes coding and I am still in the beginner stage
        </SectionText>
        <a href="https://youtu.be/dQw4w9WgXcQ"><Button>Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;