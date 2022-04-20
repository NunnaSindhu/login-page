import React, { useState } from "react";


const LoginPage = ({ loginDetails,error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    // boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    boxShadow: "0px 0px 10px 10px rgb(205,105,150)",
  };


  const handleSubmit = (e) => {
e.preventDefault();
    loginDetails(details);
  };
  return (
    <div className="container">
      <div className="login-wrapper" style={loginPageStyle}>
        <h2>Login Page</h2>
        {(error !=="")?<div>{error}</div>:""}
        <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="name"
              className={"form-control"}
              placeholder="Username"
              onChange={(e) => {setDetails({...details,name:e.target.value})}} value={details.name} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={"form-control"}
              placeholder="Email"
              onChange={(e) => {setDetails({...details,email:e.target.value})}} value={details.email} required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className={"form-control"}
              placeholder="Password"
              onChange={(e) => {setDetails({...details,password:e.target.value})}} value={details.password} required
            />
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
