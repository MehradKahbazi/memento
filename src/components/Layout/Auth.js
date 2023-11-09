import { Outlet } from "react-router-dom";

const Auth = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Auth;