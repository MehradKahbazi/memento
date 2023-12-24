const FormTest = () => {
  return (
    <>
      {/* <form className="login-bo">
        <div className="rtl me-5 user-box">
          <input
            className="form-control text-input mt-5"
            id="text-input"
            placeholder=""
          />
          <label htmlFor="text-input" className="form-label label px-3">
            نام کاربری
          </label>
        </div>
      </form> */}

      <div className="container table-container pt-4 px-5 mt-5 border shadow-sm">
        <div className="row mb-4 rtl">
            
                <div className="col-md-10">
                    <h4 className="px-3">جزئیات پرسنل</h4>
                </div>
                <div className="col-md-2 justify-content-end d-flex">
                    <button className="btn btn-add ms-3">+  افزودن</button>
                </div>
            
        </div>
        <div className="row p-0">
          <div className="col-md-12 px-0">
            <table className="table table-borderless table-striped table-style rtl rounded-2">
              <thead className="table-head rounded-2">
                <tr className="table-head">
                  <td>ردیف</td>
                  <td>نام و نام خانوادگی</td>
                  <td>نقش</td>
                  <td>ایمیل</td>
                  <td>وضعیت</td>
                  <td>عملیات</td>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>1</td>
                  <td>محسن منظمی</td>
                  <td>کاربر</td>
                  <td>mohsen.monazami.mm@gmail.com</td>
                  <td className="table-status-success">فعال</td>
                  <td>ویرایش</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>مهراد کهبازی</td>
                  <td>کاربر</td>
                  <td>mohsen.monazami.mm@gmail.com</td>
                  <td className="table-status-danger">غیر فعال</td>
                  <td>ویرایش</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>فراز ناطقی</td>
                  <td>کاربر</td>
                  <td>mohsen.monazami.mm@gmail.com</td>
                  <td className="table-status-success">فعال</td>
                  <td>ویرایش</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>علیرضا مردانی</td>
                  <td>کاربر</td>
                  <td>mohsen.monazami.mm@gmail.com</td>
                  <td className="table-status-success">فعال</td>
                  <td>ویرایش</td>
                </tr>
              </tbody>
              <tfoot className="table-foot">
                <tr>
                    <td colSpan={5} className="text-start">نتیجه :</td>
                    <td colSpan={5}>نامعلوم</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTest;
