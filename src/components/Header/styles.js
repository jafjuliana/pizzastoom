import styled from "styled-components";

export const Container = styled.div`
  background-color: #0073bc;
  width: 100%;

  .content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 30px 0px 120px;

    @media (max-width: 768px) {
      padding: 10px 0px 95px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 15px;
  }

  img {
    width: 65px;
    height: auto;
    float: left;
    margin-right: 15px;

    @media (max-width: 768px) {
      width: 45px;
      margin-right: 10px;
    }
  }

  h3 {
    margin: 0;
    color: #fff;
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    margin: 0;
    color: #f7a330;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const StoomPoints = styled.div`
  text-align: right;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding-right: 15px;
  }

  @media (max-width: 768px) {
    padding-top: 4px;
  }

  img {
    width: 45px;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 35px;
    }
  }

  h5 {
    margin: 0;
    color: #f7a330;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  div {
    float: right;
  }

  p {
    margin: 0;
    color: #f7a330;
    font-size: 15px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    span {
        color: #fff;
    }
  }
`;
