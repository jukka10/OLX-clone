import styled from "styled-components";

export const HeaderArea = styled.div`
  height: 80px;
  background: #ecf1f8;
  border-bottom: 1px solid #cccc;

  .container {
    display: flex;
    margin: auto;
    max-width: 80%;
  }
  a {
    text-decoration: none;
  }
  .logo {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .logo img {
    margin: 8px;
    height: 50px;
  }
  .navigation {
    padding: 10px 0;
  }

  .navigation ul,
  li {
    padding: 0;
    margin: 0;
  }

  ul {
    display: flex;
    align-items: center;
    height: 60px;
  }

  li {
    margin: 0 10px;
    cursor: pointer;
    a,
    button {
      border: 0;
      background: 0;
      outline: 0;
      color: #000;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      padding: 5px 5px;
      border-radius: 4px;
      background: #e57706;
      color: #fff;
    }

    a:hover {
      padding: 5px 5px;
      border-radius: 4px;
      background: #e57706;
      color: #fff;
    }
    .btn {
      padding: 10px 5px;
      background: #ff8100;
      color: #fff;
      border-radius: 4px;
    }

    .btn:hover {
      padding: 10px 10px;
      font-size: 18px;
      background: #e57706;
      color: #fff;
    }
  }
`;
