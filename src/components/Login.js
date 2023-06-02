import React from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

const LogIn = () => {
  return (
    <>
    <section className=" d-flex bg-light align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img src="../assets/images/logo-dark.png" height="22" className="mx-auto d-block" alt="" />
            <div className="card login-page shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">Sign In</h4>
                <form action="doctor-dashboard.html" className="login-form mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="Email" name="email" required="" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" placeholder="Password" required="" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <div className="mb-3">
                          <div className="form-check">
                            <input className="form-check-input align-middle" type="checkbox" value="" id="remember-check" />
                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                          </div>
                        </div>
                        <a href="forgot-password.html" className="text-dark h6 mb-0">Forgot password ?</a>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-3 text-center">
                      <h6 className="text-muted">Or</h6>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-grid">
                        <button className="btn bg-soft-primary">
                          <BsFacebook/> Facebook
                        </button>
                      </div>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-grid">
                        <button className="btn bg-soft-primary">
                          <BsGoogle/> Google
                        </button>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <a href="signup.html" className="text-dark fw-bold">Sign Up</a></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default LogIn;
