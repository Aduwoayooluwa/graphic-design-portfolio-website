import React from 'react';
import { DiFirebase, DiJqueryLogo } from 'react-icons/di';
import {GiKnightBanner} from 'react-icons/gi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Stack</SectionTitle>
    <SectionText>
      I've worked with so many brands using different tools and frameworks
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJqueryLogo size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Logo Design</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Adobe Photoshop and Corel Draw x7
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Graphic design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop and Corel Draw x7
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiKnightBanner size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Business cards Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop and Corel Draw x7
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
