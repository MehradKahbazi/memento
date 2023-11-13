import { useContext, useState } from "react";
import Logo from '../../assets/images/Logo 1.png'
import AuthContext from "../../contexts/AuthContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const {loginUser} = useContext(AuthContext);

  return (
    <div className="col-md-6 vh-100 d-flex align-items-center justify-content-center">
      <div className="card w-50 bacground-opacity">
        <div className="card-body">
          <form className="form w-100"  id="kt_login_signin_form" onSubmit={loginUser}>
            {/* begin::Heading */}
            <div className="text-center">
              <img src={Logo} />
              <div className="text-gray-500 fw-semibold fs-6 my-3">
                ورود به سیستم
              </div>
            </div>
            {/* begin::Heading */}

            {/* begin::Login options */}
           
            {/* end::Login options */}

            {/* begin::Separator */}
            
            {/* end::Separator */}

            {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

            {/* begin::Form group */}
            <div className="fv-row mb-8">
              <label className="form-label fs-6 fw-bolder text-dark">
                ایمیل
              </label>
              <input
                dir="ltr"
                placeholder="example@example.com"
                // {...formik.getFieldProps('email')}
                className="form-control bg-transparent mb-3"
                type="email"
                name="email"
                autoComplete="off"
              />
              {/* {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )} */}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className="fv-row mb-5">
              <label className="form-label fw-bolder text-dark fs-6 ">
                رمز عبور
              </label>
              <input
                type="password"
                autoComplete="off"
                dir="ltr"
                name="password"
                className="form-control bg-transparent"
              ></input>
              {/* {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )} */}
            </div>
            {/* end::Form group */}

            {/* begin::Wrapper */}
            
            {/* end::Wrapper */}

            {/* begin::Action */}
            <div className="d-flex my-4 justify-content-center">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn w-50"
                style={{backgroundColor: '#6F4E37'}}
                // disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className="indicator-label text-light mb-2">ورود</span>}
                {loading && (
                  <span
                    className="indicator-progress mb-2"
                    style={{ display: "block" }}
                  >
                    لطفا صبر کنید...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
            </div>
            {/* end::Action */}

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
