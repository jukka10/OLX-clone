import styled from "styled-components";

export const Container = styled.div`
  a {
    display: block;
    border: 1px solid #fff;
    background: #fff;
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    color: #000;
    transition: all ease 0.5s;

    &:hover {
      background: #eee;
      border: 1px solid #ccc;
    }

    .image img {
      width: 100%;
      border-radius: 5px;
    }
    .name {
      font-size: 20px;
      font-weight: bold;
      line-height: 25px;
    }
  }
`;
