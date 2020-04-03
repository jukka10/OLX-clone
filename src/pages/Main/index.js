import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getLocs, getCategory, getAds } from "../../helpers/olxApi";

import AdItem from "../../components/AdItem";
import { PageContainer } from "../../components/mainComponents";
import { Container, SearchContainer } from "./styles";

export default function Main() {
  const [state, setState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function getStates() {
      const response = await getLocs();
      setState(response);
    }
    getStates();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const response = await getCategory();
      setCategories(response);
    }
    getCategories();
  }, []);

  useEffect(() => {
    async function getRecentAds() {
      const response = await getAds({
        sort: "desc",
        limit: 8
      });

      response.splice(5, 1);

      setAds(response);
    }
    getRecentAds();
  }, []);

  return (
    <>
      <SearchContainer>
        <PageContainer>
          <div className="searchBox">
            <form action="/ads" method="get">
              <input
                type="text"
                name="query"
                placeholder="O que você procura?"
              />
              <select name="state">
                {state.map((State, index) => (
                  <option key={index} value={State.name}>
                    {State.name}
                  </option>
                ))}
              </select>
              <button className="btn">Pesquisar</button>
            </form>
          </div>
          <div className="categoryBox">
            {categories.map((Category, index) => (
              <Link
                key={index}
                to={`/ads?cat=${Category.name}`}
                className="categoryItem"
              >
                <img src={Category.img} alt="" />
                <span>{Category.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchContainer>
      <PageContainer>
        <Container>
          <h2>Anúncios mais recentes</h2>
          <div className="listAds">
            {ads.map((ad, index) => (
              <AdItem key={index} data={ad} />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            Ver Todos
          </Link>
          <hr />
          Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica
          e de impressão. Lorem Ipsum é o texto fictício padrão do setor desde
          os anos 1500, quando uma impressora desconhecida pegou uma galera do
          tipo e a mexeu para fazer um livro de amostras do tipo. Ele sobreviveu
          não apenas cinco séculos, mas também o salto para a composição
          eletrônica, permanecendo essencialmente inalterado. Foi popularizado
          na década de 1960 com o lançamento de folhas de Letraset contendo
          passagens de Lorem Ipsum e, mais recentemente, com software de
          editoração eletrônica como o Aldus PageMaker, incluindo versões do
          Lorem Ipsum.
        </Container>
      </PageContainer>
    </>
  );
}
