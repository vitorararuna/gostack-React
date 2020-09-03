import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; //passando estilização p um elm superior, ja que o tooltip está sendo estilizado no styled-components
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;