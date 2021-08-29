import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  content: React.ReactNode;

}

const Timeline: React.FC<Props> = ({ title, content}) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

export default Timeline;
