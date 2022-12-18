import { useRoutes, Navigate } from "react-router-dom";
import { Login, Register, ResetPassword } from "views";
import { ProtectedRoute } from "components";
import { TAppProps, TProtectedRouteProps } from "types";

const R = () => <div> Protected route</div>

const Routes = ({ appProps }: {appProps: TAppProps}) => {
    const ProtectedRouteWithAppProps = (props: Omit<TProtectedRouteProps, 'appProps'>) => <ProtectedRoute appProps={appProps} {...props}/>;
    const router = useRoutes([
        {
            path:'/login',
            element: <ProtectedRouteWithAppProps component={Login}/>
        },
        {
            path:'/register',
            element: <ProtectedRouteWithAppProps component={Register}/>
        },
        {
            path:'/reset-password',
            element: <ProtectedRouteWithAppProps component={ResetPassword}/>
        },
        {
            path:'/dashboard',
            element: <ProtectedRouteWithAppProps component={R} isProtected/>
        },
        { path: '/', element: <Navigate to='/dashboard' replace/>}
]);

return router;
};

export default Routes;