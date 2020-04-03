import React, { useState } from "react";

import { Auth } from "../../helpers/authHandler";
import { Authentication } from "../../helpers/olxApi";

import {
  PageContainer,
  PageTitle,
  ErrorMessage
} from "../../components/mainComponents";
import { Container } from "./styles";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remeberPassword, setRemeberPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setDisabled(true);

    try {
      const json = await Authentication(email, password);
      console.log(json);
      if (json.error) {
        setError(json.error);
      }

      Auth(json.token, remeberPassword);
      window.location.href = "/";
    } catch (err) {
      return console.log(err);
    }
    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <Container>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="InputBox">
            <div className="AreaTitle">E-mail</div>
            <div className="AreaInput">
              <input
                type="email"
                value={email}
                onChange={Email => setEmail(Email.target.value)}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="InputBox">
            <div className="AreaTitle">Senha</div>
            <div className="AreaInput">
              <input
                type="password"
                value={password}
                onChange={Password => setPassword(Password.target.value)}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="InputBox">
            <div className="AreaTitle">Lembrar minha senha</div>
            <div>
              <input
                type="checkbox"
                checked={remeberPassword}
                onChange={() => setRemeberPassword(!remeberPassword)}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="InputBox">
            <div className="AreaTitle"></div>
            <div className="AreaInput">
              <button type="submit" disabled={disabled}>
                Fazer login
              </button>
            </div>
          </label>
        </form>
      </Container>
    </PageContainer>
  );
}
