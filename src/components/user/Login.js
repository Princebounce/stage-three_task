import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setauthenticate] = useState(false);

  // Router
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        

        showSuccessToast();

        setTimeout(() => {
          navigate("/index");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        showErrorToast();
      });

    setauthenticate(true);
  };
  // Toast Success Func
  const showSuccessToast = () => {
    toast.success("Success", {
      autoClose: 2000,
    });
  };

  // Toast Error Func
  const showErrorToast = () => {
    toast.error("Invalid email and password!", {
      autoClose: 2000,
    });
  };
  return (
    <>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form
          className="login-form"
          noValidate
          authenticate={authenticate}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <NavLink className="navbar-brand fw-bold fw-4" to="/signup">
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("signup")}
          >
            Don't have an account? Register here.
          </button>
        </NavLink>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
