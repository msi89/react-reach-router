import React from "react";
import Page from "../components/page";
import Layout from "../layouts/blank";
import { navigate } from "@reach/router";

const LoginPage = () => {
  let state = { email: "", password: "" };

  function submit(event) {
    event.preventDefault();
    console.log("values", state);
    if (state.email === "admin@test.com" && state.password === "0000") {
      localStorage.setItem("token", "jddkjdah5#DF#%$%4889348");
      navigate("/");
    } else {
      alert("email or password incorrect");
    }
  }
  function handleChange(event) {
    if (event.target.name === "email") {
      state = { ...state, email: event.target.value };
    }
    if (event.target.name === "password") {
      state = { ...state, password: event.target.value };
    }
  }
  return (
    <Layout>
      <Page>
        <form method="post" className="app-form" onSubmit={submit}>
          <h1>Login</h1>
          <div className="form-group">
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </Page>
    </Layout>
  );
};

export default LoginPage;
