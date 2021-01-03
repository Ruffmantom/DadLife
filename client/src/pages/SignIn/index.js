import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { isAuthenticated, authenticate } from "../../auth/index";
import "./style.css";
// api calls
import { signIn } from "../../auth/index";
// import images
import logo from "../../assets/images/newicons/logowht.svg";
export default function SignIn() {
  const history = useHistory();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    error: "",
    success: false,
    loading: false,
    redirectToReferrer: false,
  });

  const { userName, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleInputs = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clickSignIn = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    if(userName === ""){
      setValues({...values,error:"Please Enter a Username to continue"})
    }else if(password=== ""){
      setValues({...values,error:"Please provide a Password"})
    } else{
      signIn({ userName, password }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, redirectToReferrer: true });
          });
        }
      });
    }
    
  };
  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user.role === 0) {
        return <Redirect to={`/auth/${user._id}`} />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to={`/auth/community/${user._id}`} />;
    }
  };
  const showError = () => (
    <div className=" alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );
  const showLoading = () =>
    loading && (
      <div className="alert-info">
        <p>Loading ...</p>
      </div>
    );
  const FormComponent = () => (
    <div className="ua-cont">
      <img className="si-su-logo" src={logo} alt="#" />
        {showError()}
        {showLoading()}
        <h3>Dad Life</h3>
        <p style={{ marginTop: "15px" }}>Sign In</p>
      <form className="ua-form" onSubmit={clickSignIn}>
        <input
          value={userName}
          type="text"
          onChange={handleInputs("userName")}
          placeholder="Username"
        />
        {/* might need to add "passwords do not match" */}
        <input
          value={password}
          type="password"
          onChange={handleInputs("password")}
          placeholder="Password"
        />
        <button>Sign In</button>
      </form>
      <Link id="to-signin" to="/signup">
        Need to sign up?
      </Link>
      <br />
      <Link id="forgot-pass" to="/forgotpass">
        Forgot Password?
      </Link>
    </div>
  );
  return (
    <div>
      {FormComponent()}
      {redirectUser()}
    </div>
  );
}
