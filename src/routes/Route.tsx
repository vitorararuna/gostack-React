import React from 'react';
import { useAuth } from '../hooks/auth';
import {
    RouteProps as ReactRouterProps,
    Route as ReactRoute,
    Redirect
} from 'react-router-dom';

interface RouteProps extends ReactRouterProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

//Casos rotaPrivada/autenticado:

//true/true = ok
//true/false = redirect para login
//false/true = redirect para dash
//false/false = ok

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                        <Redirect to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state: { from: location }
                        }} />
                    );
            }}
        />
    );
};

export default Route;