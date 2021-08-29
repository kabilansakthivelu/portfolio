import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';

interface ProjectsPage {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      projectTitle: string;
    };
  };
}

const ProjectsPage: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              projectTitle
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const projects: Projects[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {projects.map((item) => {
        const {
          id,
          html,
          frontmatter: { projectTitle }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={projectTitle}
            content={<FormatHtml content={html} />}
          />
        );
      })}
    </Container>
  );
};

export default ProjectsPage;
