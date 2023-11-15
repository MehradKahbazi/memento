import FormCard from "../components/Login/FormCard";
import Background from "../assets/images/Admin-Left.png"

const Login = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row text-light">
          <div className="col-md-5 col-sm-12 vh-fluid p-0">
            <div className="row">
            <img src={Background} className='container-fluid vh-100'/>
            </div>
          </div>
          <div className="col-md-7 d-flex  align-items-center justify-content-center">
            <FormCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
