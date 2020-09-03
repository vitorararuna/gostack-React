import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => { //Transformei em Icon com letra maiúscula para reconhecer que é um componente

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  //Quando o input não tem focus, mas há valor preenchido, deixo somente o ícone com o background laranja
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {/* <p onClick={() => console.log(error)}>inputRef</p> */}
      <Container isErrored={!!error} isFocused={isFocused} isField={isField}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c33030" size={20} />
          </Error>
        )}
      </Container>
    </>
  )
};

export default Input;