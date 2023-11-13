import { Outlet } from "react-router-dom";

const Auth = () => {
    return ( 
        <div className="container-fluid">
                <Outlet />
        </div>
     );
}
 
export default Auth;