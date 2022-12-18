import React from "react";

export type TAppProps = {
    isAuthorised: boolean;
    setIsAuthorised: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TProtectedRouteProps = {
    component: (props: {appProps: TAppProps}) => JSX.Element;
    isProtected?: boolean;
    appProps: TAppProps;
};

export type TComponentWithAppProps = {
    appProps: TAppProps
};
