import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  .content {
    flex: 1;
    margin-top: 15px;
    background: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;

    .bloc {
      display: flex;
      width: 50%;
      height: 80%;

      float: right;
      margin: 10px;
      align-items: center;
      justify-content: center;

      .img {
        display: none;
      }

      input {
        display: none;
      }
      label {
        border: 1px dashed #bbb;

        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        padding: 6px 20px;
      }
    }

    form {
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

          input,
          textarea,
          select {
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
          textarea {
            height: 100px;
            resize: none;
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
  }
`;
