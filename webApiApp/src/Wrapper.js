import React from 'react';
import Router from './Routers';
import AuthProvider from './context/AuthProvider';

export default () => {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
};