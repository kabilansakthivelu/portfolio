import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content0: React.ReactNode;
  content1: React.ReactNode;
  content2: React.ReactNode;
  content3: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content0, content1, content2, content3, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content0}</Styled.Content>
      <Styled.Content>{content1}</Styled.Content>
      <Styled.Content>{content2}</Styled.Content>
      <Styled.Content>{content3}</Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
