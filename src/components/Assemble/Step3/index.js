import React from "react";

import { useAssembleContext } from "../context";
import User from "../../../services/User";
// import { Container } from './styles';

function Step3() {
  const {
    listPizzaSize,
    activeStep,
    setActiveStep,
    setValueSize,
    valueSize,
    setSelectedPizza,
    valueFlavor,
    valueDough,
    selectedPizza,
  } = useAssembleContext();

  const handleStep = async () => {
    if (valueSize !== null) {
      const totalPrice = valueDough.price + valueSize.price + valueFlavor.price;
      const totalPoints =
        valueDough.points + valueSize.points + valueFlavor.points;

      setSelectedPizza({
        ...selectedPizza,
        size: valueSize.id,
        price: totalPrice,
      });

      await User.storePoints(totalPoints);
    }
  };

  return (
    <div className={`step step3 ${activeStep === "3" ? "active" : ""}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione o tamanho:</h5>
        <div>Total: R${selectedPizza.price || 0}</div>
        <div>3/3</div>
      </div>

      <div>
        {listPizzaSize.map((item) => (
          <div className="item" key={item.label}>
            <h5>{item.value}</h5>
            <p>{item.description}</p>
            <input
              type="radio"
              name="size"
              value={item.id}
              onClick={() => setValueSize(item)}
            />
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setActiveStep("2")}>voltar</button>
        <button onClick={() => handleStep()}>finalizar pedido</button>
      </div>
    </div>
  );
}

export default Step3;
