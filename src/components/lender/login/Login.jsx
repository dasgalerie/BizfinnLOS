import React, { useState } from "react";
import logo from "../../assets/imgs/logo.png";
import loader from "../../assets/imgs/loader.gif";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setuserType] = useState(2);

  let items = { email, password,userType };
  const navigate = useNavigate();

  // ========Login API call=============
  const Admin_login = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(items);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setIsLoading(true); // Show the loader
    fetch("https://bizfinn.onrender.com/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result.success) {
          navigate("/lender-dashboard");
          localStorage.setItem("lenderusertoken", result.data.fcmToken);
          localStorage.setItem("lenderuserid", result.data._id);
        } else {
          setErrorMessage(" Wrong Credentials!");
        }
        setIsLoading(false); // Hide the loader after API response
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false); // Hide the loader on API error
      });
  };
  return (
    <>
      {/* Show the loader conditionally */}

      <section className="auth_main_section full_container auth_banner_img pos_rel">
        {isLoading && (
          <div className="pos_abs">
            <img src={loader} alt="loader" className="img-fluid" />
          </div>
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="auth_content_col">
                <img src={logo} alt="logo" className="img-fluid logo" />
                <div className="auth_content_div">
                  <h1>
                    Lending<br />
                    <span>
                      Made <br /> Easy.
                    </span>
                  </h1>
                  <p>
                    With an aim to help businesses grow exponentially, we are building a one stop solution for SMEs to manage their invoices, payments and get access to collateral free working capital financing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="auth_second_col_main_outer">
                <div className="auth_second_col_main">
                  <div className="content">
                    <form onSubmit={Admin_login}>
                      <h2>Lender Login</h2>
                      <input
                        type="text"
                        className="form_input_box"
                        placeholder="Enter Email/Phone Number"
                        autoCorrect="off"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form_input_box"
                        style={{ marginBottom: "0" }}
                        placeholder="Enter Password"
                        autoCorrect="off"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <div className="forget_password">
                        <Link to="#"> Forgot Password ? </Link>
                      </div>
                      <div className="login_register_btn_div">
                        <button
                          type="submit"
                          className="blue_btn login_register_btn"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Login"}{" "}
                        </button>
                      </div>

                      {/* =============== Error msg=============== */}
                      <div className="error_msg">
                        {errorMessage && (
                          <div className="error">
                            {" "}
                            <p> {errorMessage} </p>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
