import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .content-obs{
    text-align: right;
    font-size: 12px;
    color: #989dab;
    padding-top: 5px;

    span{
      color: red;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  background-color: #e6e7ef;
  padding: 20px 0px !important;
  border-radius: 10px;
  position: relative;

  h5 {
    padding: 0px 20px;
    margin: 0 0 20px;
    color: #656b83;
    font-size: 24px;
  }

  .content-box {
    padding: 0px 20px;
    display: flex;

    .image {
      width: 100%;
      max-width: 300px;
      overflow: hidden;
      text-align: center;
      margin-right: 30px;

      img {
        width: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
  }

  .box-points{
    display: flex;
    position: absolute;
    top: -40px;
    right: -45px;
    background-image: url('/images/iconIndividualPoints.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    text-align: center;
    color: #FFFFFF;
    font-size: 20px;
    align-items: center;

    .content-points {
      flex: 1;
      
      p{
        margin: 0;
        font-weight: 600;
        font-size: 30px;
        line-height: 25px;
      }
    }
  }
`;

export const InfoBox = styled.div`
  width: 100%;

  h3 {
    color: #3e3a4f;
    font-size: 26px;
    margin: 10px 0 15px;
  }

  .info-pizza {
    label {
      color: #84898b;
      font-weight: 600;
      font-size: 15px;
    }

    p {
      font-size: 16px;
      color: #515063;
      font-weight: 500;
      margin-top: 5px;
    }
  }

  .price-save {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    div {
      color: #00a74f;
      font-size: 34px;

      span {
        font-weight: bold;
      }
    }

    button {
      background: #00a74f;
      border: 1px solid #00a74f;
      box-shadow: none;
      border-radius: 10px;
      color: #FFF;
      height: fit-content;
      padding: 10px 30px;
      font-size: 20px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: transparent;
        color: #00a74f;
      }
    }
  }
`;
