import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
// api calls
import { signUp } from "../../auth/index";
import logo from "../../assets/images/newicons/logoBK.png"
export default function SignUp() {
  const history = useHistory();

  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { userName, email, password, error, success } = values;
  const [checkPass, setCheckPass] = useState("");
  const [typing, setTyping] = useState(false);
  let [timmer, setTimmer] = useState(5);

  const handleInputs = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  // ------ password matching
  const validatePass = (e) => {
    if (e) {
      setTyping(true);
      setCheckPass(e.target.value);
    } else {
      setTyping(false);
    }
  };
  const validationColors = {
    passed: {
      boxShadow: "inset 0px 0px 0px 2px #45ba81",
    },
    failed: {
      boxShadow: "inset 0px 0px 0px 2px #FF5454",
    },
    none: {
      border: "none",
    },
  };
  const styleIt = () => {
    if (typing) {
      if (values.password === checkPass) {
        return validationColors.passed;
      } else if (checkPass === "") {
        return validationColors.none;
      } else {
        return validationColors.failed;
      }
    }
  };
  // -------------------------
  const redirectUser = () => {
    var direct = setInterval(() => {
      if (timmer <= 0) {
        history.push("/signin");
        clearInterval(direct);
      }
      setTimmer((timmer -= 1));
    }, 500);
  };

  // submit the form and redirect after 10 seconds
  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    if (values.password === checkPass) {
      signUp({ userName, email, password }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            userName: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
          setCheckPass("");
          redirectUser();
        }
      });
    } else {
      console.log("passwords do not match");
    }
  };
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div className=" alert-info" style={{ display: success ? "" : "none" }}>
      <p>
        Success! <br />
        Please Check your email for a confirmation Link.
        <br /> Redirecting in {timmer} Seconds
      </p>
    </div>
  );
  const formComponent = () => (
    <div className="ua-cont">
      <img src={logo} alt="#" />
      {error ? showError() : ""}
      {success ? showSuccess() : ""}
      <h3>Sign Up to start using Dad Life</h3>
      <form className="ua-form" onSubmit={(e) => clickSubmit(e)}>
        <input
          type="text"
          onChange={handleInputs("userName")}
          placeholder="Choose a Username"
        />
        <input
          type="email"
          onChange={handleInputs("email")}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handleInputs("userName")}
          placeholder="Choose a Password"
        />
        <input
          type="password"
          style={styleIt()}
          onChange={(e) => validatePass(e)}
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/auth/">Already have account? Sign In</Link>
    </div>
  );
  return <div>{formComponent()}</div>;
}
