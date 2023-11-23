const FormTest = () => {
    return ( 
        <>
        {/* <form>
        <div className="container">
            <div className="row justify-content-center vh-100 align-items-center rtl">
                <div className="col-md-6 ">
                    <div className="card p-5 rounded-4">
                    <div class="form-floating mb-3">
                        <input type="email" className="form-control mb-3 text-input" id="floatingInput" placeholder=""/>
                        <label htmlFor="floatingInput" className="label-rtl">Email address</label>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-floating">
                        <input type="password" className="form-control mb-3 text-input" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword" className="label-rtl">Password</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input mb-5 " id="exampleCheck1"/>
                            <label className="form-check-label label-rtl" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </form> */}

      <form className="login-bo">
        <div className="rtl me-5 user-box">
            <input className="form-control text-input mt-5" id="text-input" placeholder=""/>
            <label htmlFor="text-input" className="form-label label px-3">نام کاربری</label>
        </div>
      </form>
      </>
     );
}
 
export default FormTest;