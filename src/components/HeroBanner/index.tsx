import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content0: string;
  content1: string;
  content2: string;
  content3: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content0
          content1
          content2
          content3
          linkTo
          linkText
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content0={heroBanner.content0}
      content1={heroBanner.content1}
      content2={heroBanner.content2}
      content3={heroBanner.content3}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
