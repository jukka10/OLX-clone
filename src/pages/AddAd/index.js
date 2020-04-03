import React, { useState, useMemo, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { MdCameraAlt } from "react-icons/md";

import { getCategory, NewAd } from "../../helpers/olxApi";

import {
  PageContainer,
  PageTitle,
  ErrorMessage
} from "../../components/mainComponents";
import { Container } from "./styles";

export default function NewAds() {
  const fileFiled = useRef();
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [negotiable, setNegotiable] = useState(false);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const InputMaksConfig = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ","
  });

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null;
  }, [img]);

  useEffect(() => {
    async function getCategories() {
      const res = await getCategory();
      setCategories(res);
    }
    getCategories();
  }, []);

  async function HandleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    setError("");
    let errors = [];

    if (!titulo.trim()) {
      return errors.push("Sem titulo");
    }

    if (!category.trim()) {
      return errors.push("Sem titulo");
    }

    if (errors.length === 0) {
      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("price", price);
      formData.append("priceneg", negotiable);
      formData.append("desc", description);
      formData.append("cat", category);

      if (fileFiled.current.files.length > 0) {
        for (let i = 0; i < fileFiled.current.files.length; i++) {
          formData.append("img", fileFiled.current.files[i]);
        }

        console.log("req" + formData);
        const res = await NewAd(formData);
        console.log("resposta: " + res);

        if (!res.error) {
          history.push(`add/${res.id}`);
          return;
        } else {
          return setError(res.error);
        }
      }
    } else {
      setError(errors.join("\n"));
    }
    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle>Crie um Anúncio</PageTitle>

      <Container>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="content">
          <div className="bloc">
            <label htmlFor="img" style={{ backgroundImage: `url(${preview})` }}>
              <MdCameraAlt size={25} className={preview ? "img" : ""} />
              <input
                type="file"
                id="img"
                disabled={disabled}
                ref={fileFiled}
                multiple
                onChange={img => setImg(img.target.files[0])}
              />
            </label>
          </div>
          <form>
            <label className="InputBox">
              <div className="AreaTitle">Titulo do anúncio</div>
              <div className="AreaInput">
                <input
                  type="text"
                  disabled={disabled}
                  required
                  value={titulo}
                  onChange={titulo => setTitulo(titulo.target.value)}
                />
              </div>
            </label>
            <label className="InputBox">
              <div className="AreaTitle">Categoria</div>
              <div className="AreaInput">
                <select
                  onChange={category => setCategory(category.target.value)}
                  disabled={disabled}
                  required
                >
                  {categories &&
                    categories.map((cat, index) => (
                      <option key={index} value={index}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
            </label>
            <label className="InputBox">
              <div className="AreaTitle">Preço</div>
              <div className="AreaInput">
                <InputMask
                  mask={InputMaksConfig}
                  value={price}
                  onChange={price => setPrice(price.target.value)}
                  placeholder="Preço em R$"
                  disabled={disabled || negotiable}
                  required
                />
              </div>
            </label>
            <label className="InputBox">
              <div className="AreaTitle">Preço negociável?</div>
              <div>
                <input
                  type="checkbox"
                  checked={negotiable}
                  onChange={() => setNegotiable(!negotiable)}
                  disabled={disabled}
                />
              </div>
            </label>
            <label className="InputBox">
              <div className="AreaTitle">Descrição</div>
              <div className="AreaInput">
                <textarea
                  value={description}
                  onChange={description =>
                    setDescription(description.target.value)
                  }
                  placeholder="Descrição do produto"
                  disabled={disabled}
                  required
                ></textarea>
              </div>
            </label>
            <label className="InputBox">
              <div className="AreaTitle"></div>
              <div className="AreaInput">
                <button
                  type="submit"
                  onClick={HandleSubmit}
                  disabled={disabled}
                >
                  Criar anúncio
                </button>
              </div>
            </label>
          </form>
        </div>
      </Container>
    </PageContainer>
  );
}
