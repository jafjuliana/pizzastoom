import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step3() {
  const { listPizzaSize, activeStep, setActiveStep } = useAssembleContext();

  return (
    <div className={`step step3 ${activeStep === '3' ? 'active' : ''}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione o tamanho:</h5>
        <div>3/3</div>
      </div>

      <div>
        {listPizzaSize.map(item => (
          <div className="item" key={item.label}>
            <h5>{item.value}</h5>
            <p>{item.description}</p>
            <input type="radio" name="flavor" value={item.id} />
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setActiveStep('2')}>voltar</button>
        <button>finalizar pedido</button>
      </div>
    </div>
  );
}

export default Step3;
