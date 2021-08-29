import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Projects from 'components/projects';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
    <hr />
  </Layout>
);

export default ResumePage;
