import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;

  .box {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }

  .box--padding {
    padding: 10px;
  }

  .leftSide {
    flex: 1;
    margin-right: 20px;
    .box {
      display: flex;
    }

    .adImage {
      width: 400px;
      height: 400px;
      margin-right: 20px;

      .imagem {
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: contain;
        height: 400px;
        width: 500px;
      }
    }
    #adInfo {
      flex: 1;
      .adName {
        margin-bottom: 20px;
        h2 {
          margin: 0;
          margin-top: 20px;
        }
        small {
          color: #999;
        }
      }
      .adDescription {
        p {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 10px;
        }
        hr {
          margin-bottom: 5px;
        }
        small {
          color: #999;
          font-style: italic;
        }
      }
    }
  }
  .rightSide {
    width: 250px;
    padding: 10px;

    .box {
      .price {
        padding: 10px;
        span {
          font-weight: bold;
          font-size: 25px;
          color: #531cb3;
        }
        .priceNegotiable {
          font-size: 22px;
        }
      }
    }
    a {
      text-decoration: none;
      height: 35px;
      color: #fff;
      background: #531cb9;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .createBy small {
      display: block;
      margin-top: 5px;
      color: #999;
    }
    .createBy {
      font-size: 16px;
    }
  }
`;
export const Fake = styled.div`
  background: #fff;
  height: ${props => props.height || 20}px;

  animation: loop 0.9s infinite;

  @keyframes loop {
    from {
      background: #fff;
    }
    to {
      background: #ccc;
    }
  }
`;

export const OthersContainer = styled.div`
  .othersAds {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  h2 {
    display: inline-block;
    margin-top: 20px;
  }
`;

export const BreadCrumb = styled.div`
  margin: 10px;
  a {
    color: #000;
    text-decoration: underline;
  }
`;
