import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./LoginPage.scss";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const captchaValue = captchaRef.current?.getValue();
    const emailValue = emailRef.current?.value;

    try {
      await axios
        .post("http://localhost:8080/userLogin", {
          email: emailValue,
          captchaToken: captchaValue,
        })
        .then(() => navigate("/Dashboard"));
    } catch (error) {
      console.error("Failed to login:", error);
    }
  }

  return (
    <div className="d-flex align-items-center flex-column justify-content-center loginPage">
      <h2 className=" text-white mb-5">Login</h2>
      <Card className="p-5 w-25 h-50">
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />
            <Button type="submit" className="mt-5 w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
