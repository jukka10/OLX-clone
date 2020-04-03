import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function AdItem({ data }) {
  return (
    <Container className="aditem">
      <Link to={`/ads/${data.id}`}>
        <div className="image">
          <img src={data.image} alt="" />
        </div>
        <div className="name">{data.title}</div>
        <div className="price">
          <p>{data.priceNegotiable ? "Preço negociavel" : data.price}</p>
        </div>
      </Link>
    </Container>
  );
}
