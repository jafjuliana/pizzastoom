import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step2() {
  const {
    listPizzaDough,
    activeStep,
    setActiveStep,
    setValueDough,
    valueDough,
    selectedPizza,
    setSelectedPizza,
    valueFlavor,
  } = useAssembleContext();

  const handleStep = () => {
    if (valueDough !== null) {
      setActiveStep("3");
      const totalPrice = valueDough.price + valueFlavor.price;

      setSelectedPizza({
        ...selectedPizza,
        dough: valueDough.id,
        price: totalPrice,
      });
    }
  };

  return (
    <div className={`step step2 ${activeStep === "2" ? "active" : ""}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione sua massa:</h5>
        <div>Total: R${selectedPizza.price || 0}</div>
        <div>2/3</div>
      </div>

      <div>
        {listPizzaDough.map((item) => (
          <div className="item" key={item.label}>
            <h5>{item.value}</h5>
            <p>{item.description}</p>
            <input
              type="radio"
              name="dough"
              value={item.id}
              onClick={() => setValueDough(item)}
            />
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setActiveStep("1")}>voltar</button>
        <button onClick={() => handleStep()}>escolher tamanho</button>
      </div>
    </div>
  );
}

export default Step2;
