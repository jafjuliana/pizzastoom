import React from "react";
import { useSelector } from 'react-redux';

import { Container, Logo, StoomPoints } from "./styles";
import iconLogo from "../../assets/iconPizza.png";
import iconStoom from "../../assets/iconStoomPoints.png";

export default function Header() {
  const userPoints = useSelector((state) => state.user);

  return (
    <Container>
      <div className="content">
        <Logo>
            <img src={iconLogo} alt="PizzaStoom" />
            <div>
              <h3>PizzaStoom</h3>
              <p>é pizza, sim.</p>
            </div>
        </Logo>
        <StoomPoints>
            <div>
              <h5>StoomPoints</h5>
              <p><span>{userPoints.user || 0}</span> pontos.</p>
            </div>
            <img src={iconStoom} alt="PizzaStoom" />
        </StoomPoints>
      </div>
    </Container>
  );
}
