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
          Alpha Designs
        </SectionTitle>
        <SectionText>
          .....Giving your brand an alpha touch
        </SectionText>
        <Button onClick={props.handleClick}><a href='mailto:designalpha58@gmail.com' style={{color: "white", fontWeight: "normal"}}>Hire Me</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;