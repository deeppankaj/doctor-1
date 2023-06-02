import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  const data = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [signUpData, setSignUpData] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };
  return (
    <section className="bg-half-150 d-table w-100 bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img
              src="../assets/images/logo-dark.png"
              height="22"
              className="mx-auto d-block"
              alt=""
            />
            <div className="card login-page shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">Sign Up</h4>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="login-form mt-4"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          First name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              firstname: e.target.value,
                            });
                          }}
                          value={signUpData.firstname}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Last name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              lastname: e.target.value,
                            });
                          }}
                          value={signUpData.lastname}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              email: e.target.value,
                            });
                          }}
                          value={signUpData.email}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Mobile Number{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              mobile: e.target.value,
                            });
                          }}
                          value={signUpData.mobile}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              password: e.target.value,
                            });
                          }}
                          value={signUpData.password}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input align-middle"
                            type="checkbox"
                            value=""
                            required=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="accept-tnc-check"
                          >
                            I Accept{" "}
                            <a href="#" className="text-primary">
                              Terms And Condition
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-grid">
                        <button className="btn btn-primary">Register</button>
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

                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Already have an account ?
                        </small>{" "}
                        <Link to={"/login"} className="text-dark fw-bold">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
