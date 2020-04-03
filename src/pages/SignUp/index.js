import React, { useState, useEffect } from "react";

import { Auth } from "../../helpers/authHandler";
import { getLocs, Register } from "../../helpers/olxApi";

import {
  PageContainer,
  PageTitle,
  ErrorMessage
} from "../../components/mainComponents";
import { Container } from "./styles";

export default function SingUp() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");

  const [stateList, setStateList] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getStates() {
      const sList = await getLocs();
      setStateList(sList);
    }
    getStates();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setDisabled(true);

    if (password !== confirmPassWord) {
      setError("Senhas não batem!");
      setDisabled(false);
      return;
    }
    try {
      const json = await Register(name, state, email, password);

      if (json.error) {
        setError(json.error);
      }
      Auth(json.token);
      window.location.href = "/";
    } catch (err) {
      return console.log(err);
    }
    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <Container>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="InputBox">
            <div className="AreaTitle">Nome completo</div>
            <div className="AreaInput">
              <input
                type="text"
                value={name}
                onChange={Name => setName(Name.target.value)}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="InputBox">
            <div className="AreaTitle">Escolha seu estado</div>
            <div className="AreaInput">
              <select
                className="selecState"
                value={state}
                onChange={State => setState(State.target.value)}
              >
                <option></option>
                {stateList.map((locs, index) => (
                  <option key={index} value={locs._id}>
                    {locs.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
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
            <div className="AreaTitle">Confirmar senha</div>
            <div className="AreaInput">
              <input
                type="password"
                value={confirmPassWord}
                onChange={Password => setConfirmPassWord(Password.target.value)}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="InputBox">
            <div className="AreaTitle"></div>
            <div className="AreaInput">
              <button type="submit" disabled={disabled}>
                Cadastrar
              </button>
            </div>
          </label>
        </form>
      </Container>
    </PageContainer>
  );
}
