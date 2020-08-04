import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {
  LoginRegisterFormWrap,
  LoginRegisterFormTitle,
  FormContainer,
} from "./register";
import MainButton from "../components/button/mainButton";

class Login extends Component {
  render() {
    return (
      <>
        <LoginRegisterFormTitle>
          <div>
            <p>toko buku online </p>
          </div>
        </LoginRegisterFormTitle>
        <LoginRegisterFormWrap>
          <FormContainer>
            <h3>Sign in</h3>
            <span> belum punya akun silahkan register dulu 
            <Link to="/register">register</Link>
            </span>
            <Form>
              <Form.Group>
                <Form.Control type="name" placeholder="name" />
              </Form.Group>
              <Form.Group>
              <Form.Control type="username" placeholder="username" />
            </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <MainButton title="Sign in" style={{ width: "100%" }} />
              </Form.Group>
            </Form>
          </FormContainer>
        </LoginRegisterFormWrap>
      </>
    );
  }
}

export default Login;