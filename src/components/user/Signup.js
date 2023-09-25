import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // You may want to create a separate CSS file for styling.

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setAuthenticate] = useState(false);

  // Router
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        showSuccessToast();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        showErrorToast();
      });

    setAuthenticate(true);
  };

  // Toast Success Func
  const showSuccessToast = () => {
    toast.success("Registration Success, please login.", {
      autoClose: 2000,
    });
  };

  // Toast Error Func
  const showErrorToast = () => {
    toast.error("Invalid email or password", {
      autoClose: 2000,
    });
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@email.com.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <NavLink className="navbar-brand fw-bold fw-4" to="/">
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Log in here.
        </button>
      </NavLink>
      <ToastContainer />
    </div>
  );
};

export default Signup;
