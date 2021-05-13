import React from "react";

import { useAssembleContext } from "../context";
// import { Container } from './styles';

function Step3() {
  const { activeStep, setActiveStep } = useAssembleContext();

  return (
    <div className={`step step3 ${activeStep === '3' ? 'active' : ''}`}>
      <h3>Ou monte sua pizza</h3>

      <div>
        <h5>Selecione sua massa:</h5>
        <div>3/3</div>
      </div>

      <div>
        gdfgdfgdfgd
      </div>

      <div>
        <button onClick={() => setActiveStep('2')}>voltar</button>
      </div>
    </div>
  );
}

export default Step3;
