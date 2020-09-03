import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => ( //Children é o conteúdo dentro desse componente que foi chamado
  /* rest é a mesma coisa que as props */
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button; 