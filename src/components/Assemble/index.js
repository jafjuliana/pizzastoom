import React from "react";

import { AssembleProvider } from "./context";
import PizzaDay from './PizzaDay';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { Container } from './styles';

function Assemble() {
  return (
    <AssembleProvider>
      <Container>
        <div className="content">
          <PizzaDay />
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </Container>
    </AssembleProvider>
  );
}

export default Assemble;
