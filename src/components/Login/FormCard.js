import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const FormCard = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div className="row justify-content-center p-0">
      <div className="col-md-10 p-0">
        <div className="card border-0">
          <div className="row justify-content-center">
            <div className="col-md-6 p-0">
              <div className="row">
                <img src={Logo} />
              </div>
            </div>
          </div>
          <form onSubmit={loginUser}>
            <div className="row justify-content-center">
              <input
                className="form-control text-input mt-4"
                placeholder="نام کاربری"
                name="email"
              />
            </div>
            <div className="row justify-content-center">
              <input
                className="form-control text-input mt-3"
                placeholder="رمز عبور"
                name="password"
              />
            </div>
            <div className="row justify-content-end">
              <Link to={"/home"} className="mt-4 forgot-password">
                فراموشی رمز عبور
              </Link>
            </div>
            <div className="row justify-content-center">
              <button type="submit" className="submit-button">
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
