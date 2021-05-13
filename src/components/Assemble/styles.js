import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: -55px;

  @media (max-width: 768px) {
    margin: -55px 0px 0px;
  }

  .content{
    padding: 0px;

    @media (max-width: 768px) {
      width: calc(100% - 20px);
    }
  }
`;
