import React, { useState } from "react";

import Pizza1 from "../../assets/pizza1.jpg";
import Pizza2 from "../../assets/pizza2.jpg";
import Pizza3 from "../../assets/pizza3.jpg";

const AssembleContext = React.createContext();

const AssembleProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState('1');
  const [selectedPizza, setSelectedPizza] = useState(null);

  const listPizzaDay = {
    dough: { id: 3, label: "pan", value: "Pan", price: 2, points: 3 },
    size: { id: 3, label: "G", value: "Grande", price: 59.99, points: 3 },
    flavor: {
      id: 2,
      label: "portuguesa",
      value: "Portuguesa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ingredients: "mussarela, ovo, cebola, orégano, azeitona e presunto",
      price: 8,
      image: Pizza2,
      points: 4,
    },
    points: 50,
    price: '55,00',
  };

  const listPizzaDough = [
    { id: 1, label: "fina", value: "Fina", price: 0, points: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, label: "tradicional", value: "Tradicional", price: 0, points: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, label: "pan", value: "Pan", price: 2, points: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const listPizzaSize = [
    { id: 1, label: "P", value: "Brotinho", price: 29.99, points: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, label: "M", value: "Média", price: 39.99, points: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, label: "G", value: "Grande", price: 59.99, points: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const listPizzaFlavor = [
    {
      id: 1,
      label: "mussarela",
      value: "Mussarela",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ingredients: "mussarela, orégano e azeitona",
      price: 0,
      image: Pizza1,
      points: 1,
    },
    {
      id: 2,
      label: "portuguesa",
      value: "Portuguesa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ingredients: "mussarela, ovo, cebola, orégano, azeitona e presunto",
      price: 8,
      image: Pizza2,
      points: 4,
    },
    {
      id: 3,
      label: "calabresa",
      value: "Calabresa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ingredients: "calabresa em rodelas, mussarela e cebola",
      price: 5,
      image: Pizza3,
      points: 2,
    },
  ];

  return (
    <AssembleContext.Provider
      value={{
        activeStep,
        setActiveStep,
        listPizzaDay,
        listPizzaFlavor,
        listPizzaDough,
        listPizzaSize,
        setSelectedPizza,
        selectedPizza,
      }}
    >
      {children}
    </AssembleContext.Provider>
  );
};

const useAssembleContext = () => React.useContext(AssembleContext);

export default AssembleContext;

export { AssembleProvider, useAssembleContext };
