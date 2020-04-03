import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getAd } from "../../helpers/olxApi";

import { MdSupervisorAccount, MdEmail } from "react-icons/md";
import AdItem from "../../components/AdItem";

import { Slide } from "react-slideshow-image";
import { Container, Fake, OthersContainer, BreadCrumb } from "./styles";
import { PageContainer } from "../../components/mainComponents";

export default function AdPage() {
  const { id } = useParams();

  const [load, setLoad] = useState(true);
  const [ads, setAds] = useState({});

  useEffect(() => {
    async function getAdInfo(id) {
      const response = await getAd(id, true);

      setTimeout(() => {
        setAds(response);
        setLoad(false);
      }, 700);
    }
    getAdInfo(id);
  }, [id]);

  function formateDate(date) {
    const courrentDate = new Date(date);

    const months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ];
    const courrentDay = courrentDate.getDate();
    const courrentMonths = courrentDate.getMonth();
    const courrentYear = courrentDate.getFullYear();

    return `${courrentDay} de ${months[courrentMonths]} de ${courrentYear}`;
  }
  return (
    <PageContainer>
      {ads.category && (
        <BreadCrumb>
          Você está aqui:
          <Link to="/"> Home </Link>/
          <Link to={`/ads?state=${ads.stateName}`}> {ads.stateName} </Link>/
          <Link to={`/ads?state=${ads.stateName}&cat=${ads.category.slug}`}>
            {" "}
            {ads.category.name}{" "}
          </Link>{" "}
          / {ads.title}
        </BreadCrumb>
      )}

      <Container>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">
              {load && <Fake height={300} />}
              {ads.images && (
                <Slide>
                  {ads.images.map((imagem, index) => (
                    <div key={index} className="imagem">
                      <img src={imagem} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </div>
            <div id="adInfo">
              <div className="adName box--padding">
                {load && <Fake height={30} />}
                {ads && <h2>{ads.title}</h2>}
                {ads && !load && (
                  <small>{`Criado em: ${formateDate(ads.dateCreated)}`}</small>
                )}
              </div>
              <div className="adDescription box--padding">
                {load && <Fake height={100} />}
                {ads.description === "undefined" && <h3>Sem Descrição</h3>}
                {ads.description && ads.description !== "undefined" && (
                  <h3>{ads.description}</h3>
                )}
                <hr />
                {ads.views && (
                  <small>
                    <MdSupervisorAccount size={15} />
                    {`  ${ads.views} pessoas já vizualizaram esse anúncio`}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="box box--padding">
            {load && <Fake height={20} />}
            {ads.priceNegotiable && (
              <div className="price">
                <span className="priceNegotiable">Preço Nogiciável</span>
              </div>
            )}
            {!ads.priceNegotiable && ads.price && (
              <div className="price">
                <h3>
                  Preço: <span>R$ {ads.price}</span>
                </h3>
              </div>
            )}
          </div>
          {load && <Fake height={60} />}
          {ads.userInfo && (
            <>
              <a href={`mailto:${ads.userInfo.email}`} target="_blanck">
                <MdEmail size={15} />
                Contatar vendedor
              </a>
              <div className="createBy box box--padding">
                Criado por: <strong>{ads.userInfo.name}</strong>
                <small>E-mail: {ads.userInfo.email}</small>
                <small>Estado: {ads.stateName}</small>
              </div>
            </>
          )}
        </div>
      </Container>
      <hr />
      <OthersContainer>
        <h2>Mais anúncios do venderdor</h2>
        {!ads.others && <h4>Não possui mais anúncios</h4>}
        {ads.others && (
          <>
            <div className="othersAds">
              {ads.others.map((ads, index) => (
                <AdItem key={index} data={ads} />
              ))}
            </div>
          </>
        )}
      </OthersContainer>
    </PageContainer>
  );
}
