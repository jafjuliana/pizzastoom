import React from "react";

import { Container, Box, InfoBox } from "./styles";
import User from '../../../services/User';
import { useAssembleContext } from "../context";

function PizzaDay() {
  const { listPizzaDay, setSelectedPizza } = useAssembleContext();

  const handleSelectedPizza = async() => {
    setSelectedPizza({
      dough: 3,
      size: 3,
      flavor: 2,
      price: 55.00
    });

    await User.storePoints(listPizzaDay.points);
  };

  return (
    <Container>
      <div className="content">
        <Box>
            <h5>Selecione a pizza do dia:</h5>
            <div className="content-box">
                <div className="image">
                    <img src={listPizzaDay.flavor.image} alt={listPizzaDay.flavor.value} />
                </div>
                <InfoBox>
                    <h3>Pizza {listPizzaDay.flavor.value}</h3>
                    <div className="info-pizza">
                        <label>Tamanho:</label>
                        <p>{listPizzaDay.size.value}</p>
                        <label>Massa:</label>
                        <p>{listPizzaDay.dough.value}</p>
                        <label>Ingredientes:</label>
                        <p>{listPizzaDay.flavor.ingredients}</p>
                    </div>
                    <div className="price-save">
                        <div>R$ <span>{listPizzaDay.price}</span></div>
                        <button type="button" onClick={() => handleSelectedPizza()}>quero!</button>
                    </div>
                </InfoBox>
            </div>

            <div className="box-points">
                <div className="content-points">
                    <p>{listPizzaDay.points}</p> pontos
                </div>
            </div>
        </Box>

        <div className="content-obs"> ganhe pontos ao concluir o seu pedido <span>*</span></div>
      </div>
    </Container>
  );
}

export default PizzaDay;
