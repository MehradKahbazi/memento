import { Outlet } from "react-router-dom";

const Auth = () => {
    return ( 
        <div className="container-fluid vh-100">
                <Outlet />
        </div>
     );
}
 
export default Auth;