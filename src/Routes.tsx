import { useRoutes, Navigate } from "react-router-dom";
import { Login, Register } from "views";
import ResetPassword from "views/ResetPassword";


const Routes = () => {
    const router = useRoutes([
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path:'/reset-password',
            element: <ResetPassword/>
        },
        { path: '/', element: <Navigate to='/register' replace/>}
]);

return router;
};

export default Routes;