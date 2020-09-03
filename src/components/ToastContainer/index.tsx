
import React from 'react';

import { useTransition } from 'react-spring'; //controla a transição de um elm quando ele é criado e removido

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

    const messageWithTransitions = useTransition(//Mensagens | Função que pega todas as mensagens e retorna o id | Objeto com as animações
        messages,
        message => message.id,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 }
        }
    );

    return (
        <Container>
            {messageWithTransitions.map(({ item, key, props }) => ( //props aqui são as estilizações
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;