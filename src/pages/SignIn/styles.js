import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  form {
    margin-top: 15px;
    background: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .InputBox {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 40%;

      .AreaTitle {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-size: 16;
        font-weight: bold;
      }
      .AreaInput {
        flex: 1;

        input {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 3px;
          outline: 0;
          transition: all ease 0.5s;

          &:focus {
            border: 1px solid #ff8100;
            color: #333;
          }
        }
        button {
          background: #ff8100;
          padding: 10px;
          border: 0px;
          outline: 0;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
          color: #fff;

          &:hover {
            background: #e57706;
          }
          &:disabled {
            background: #ff8100;
          }
        }
      }
    }
  }
`;
