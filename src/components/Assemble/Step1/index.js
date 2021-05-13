import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step1() {
  const { activeStep, setActiveStep } = useAssembleContext();

  return (
    <div className={`step step1 ${activeStep === '1' ? 'active' : ''}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione sua massa:</h5>
        <div>1/3</div>
      </div>

      <div>
        opções
      </div>

      <div>
        <button onClick={() => setActiveStep('2')}>escolher tamanho</button>
      </div>
    </div>
  );
}

export default Step1;
