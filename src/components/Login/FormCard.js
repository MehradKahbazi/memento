import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const FormCard = () => {
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
          <div className="row justify-content-center">
            <input
              className="form-control text-input mt-4"
              placeholder="نام کاربری"
            />
          </div>
          <div className="row justify-content-center">
            <input
              className="form-control text-input mt-3"
              placeholder="رمز عبور"
            />
          </div>
          <div className="row justify-content-end">
            <Link to={"/home"} className="mt-4 forgot-password mb-4">
              فراموشی رمز عبور
            </Link>
          </div>
          <div className="row justify-content-center">
            <Link to={"/home"} className="submit-button">
              ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
