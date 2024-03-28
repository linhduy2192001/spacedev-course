import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";

const CountContext = createContext({});
export default function Demo() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ padding: 100 }}>
      <CountContext.Provider value={{ count, onIncrease, onDecrease }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

const CountStyle = styled.div`
  border: 1px solid #ccc;
  padding: 40px;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;

const Count = () => {
  const { count, onIncrease, onDecrease } = useContext(CountContext);
  return (
    <CountStyle>
      <Button onClick={onDecrease}>-1</Button>
      {count}
      <Button onClick={onIncrease}>+1</Button>
    </CountStyle>
  );
};
