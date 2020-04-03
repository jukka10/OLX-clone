import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;

  img {
    width: 400px;
    height: 200px;
    border-radius: 10px;
  }
  strong {
    font-size: 40px;
  }
  p {
    font-size: 24px;
  }
  img,
  strong,
  p {
    margin: 5px;
  }

  a {
    margin: 10px 0;
    text-decoration: none;
    background: skyblue;
    padding: 10px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  a:hover {
    background: rgba(155, 255, 255, 0.5);
  }
`;
