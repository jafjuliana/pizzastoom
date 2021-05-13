import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step1() {
  const { listPizzaFlavor, activeStep, setActiveStep, setValueFlavor, valueFlavor, selectedPizza, setSelectedPizza } = useAssembleContext();

  const handleStep = () => {
    if (valueFlavor !== null) {
      setActiveStep("2");
      const totalPrice = valueFlavor.price;

      setSelectedPizza({
        ...selectedPizza,
        flavor: valueFlavor.id,
        price: totalPrice,
      });
    }
  };

  return (
    <div className={`step step1 ${activeStep === '1' ? 'active' : ''}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione o sabor:</h5>
        <div>Total: R${selectedPizza.price || 0}</div>
        <div>1/3</div>
      </div>

      <div className="list">
        {listPizzaFlavor.map(item => (
          <div className="item" key={item.label}>
            <h5>{item.value}</h5>
            <p>{item.description}</p>
            <input type="radio" name="flavor" value={item.id} onClick={() => setValueFlavor(item)} />
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => handleStep()}>escolher massa</button>
      </div>
    </div>
  );
}

export default Step1;
