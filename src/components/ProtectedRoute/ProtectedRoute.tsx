import React from 'react';
import { Navigate } from 'react-router-dom';
import { TAppProps } from 'types';

type TProps = {
    component: (props: {appProps: TAppProps}) => JSX.Element;
    isProtected?: boolean;
    appProps: TAppProps;
}

const ProtectedRoute = ({component:Component, isProtected, appProps}:TProps) => {

    if(!isProtected) return <Component appProps={appProps}/>;
    return (appProps.isAuthorised &&  <Component appProps={appProps}/> ) || <Navigate to='/login' replace/>;
};

export default ProtectedRoute;