import React from 'react';
import { DiFirebase, DiReact, DiZend, IoLogoJavascript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Languages</SectionTitle>
    <SectionText>
      In my like a year of coding experiece, I have learnt various languages. But I suck at all of them though. The languages are as follows: 
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Experiece with <br />
            js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>HTML/CSS</ListTitle>
          <ListParagraph>
            Experience with <br />
            html/css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>React Native</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            py
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Nodejs</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Aoijs/DBDjs</ListTitle>
          <ListParagraph>
            Experience with <br />
            aoi.js/dbd.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;