import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IsLogged, doLogout } from "../../helpers/authHandler";
import logo from "../../assests/logo.png";
import { HeaderArea } from "./styles";

export default function Header() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const Logged = IsLogged();
    setLogged(Logged);
  }, []);
  function handleLogout() {
    doLogout();
    window.location.href = "/";
  }
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin" className="btn">
                    Crie um Anúncio
                  </Link>
                </li>
              </>
            )}
            {logged && (
              <>
                <li>
                  <Link to="/new_ads" className="btn">
                    Crie um Anúncio
                  </Link>
                </li>
                <li>
                  <Link to="/profile">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}
