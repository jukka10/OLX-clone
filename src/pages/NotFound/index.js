import React from "react";
import { Link } from "react-router-dom";

import error from "../../assests/error.png";
import { Container } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <img src={error} alt="error" />
      <strong>Erro 404</strong>
      <p>Pagina não encontrada, ou removida!!</p>
      <Link to="/">Retornar</Link>
    </Container>
  );
}
