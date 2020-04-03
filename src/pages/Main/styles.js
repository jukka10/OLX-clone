import styled from "styled-components";

export const Title = styled.p`
  color: black;
  font-size: 22;
`;
export const SearchContainer = styled.div`
  background: #ddd;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;
  }
  form {
    flex: 1;
    display: flex;

    input,
    select {
      height: 40px;
      border: 0;
      border-radius: 5px;
      outline: 0;
      font-size: 16px;
      color: #000;
      margin-right: 20px;
    }
    input {
      flex: 1;
      padding: 0 10px;
    }
    select {
      width: 100px;
    }
    .btn {
      background: #531cb3;
      font-size: 16px;
      color: #fff;
      border: 0;
      border-radius: 5px;
      outline: 0;
      height: 40px;
      padding: 0 20px;
      cursor: pointer;
    }
  }
  .categoryBox {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .categoryItem {
      width: 25%;
      height: 50px;
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
      margin-bottom: 5px;

      &:hover {
        cursor: pointer;
        color: #999;
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      span {
        font-weight: bold;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ecf1f8;

  h2 {
    font-size: 20px;
    margin-top: 10px;
  }

  .listAds {
    display: flex;
    flex-wrap: wrap;

    .aditem {
      width: 25%;
    }
    .seeAllLink {
      right: 10px;
    }
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;

    &:hover {
      color: #999;
      cursor: pointer;
    }
  }
`;
