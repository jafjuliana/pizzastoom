import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step2() {
  const { activeStep, setActiveStep } = useAssembleContext();

  return (
    <div className={`step step2 ${activeStep === '2' ? 'active' : ''}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione sua massa:</h5>
        <div>2/3</div>
      </div>

      <div>
        67543444567865
      </div>

      <div>
        <button onClick={() => setActiveStep('1')}>voltar</button>
        <button onClick={() => setActiveStep('3')}>escolher tamanho</button>
      </div>
    </div>
  );
}

export default Step2;
