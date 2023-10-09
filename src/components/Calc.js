import React from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from './ButtonBox'
import Button from './Button'
import CalcProvider from "../context/CalcContext";
import { Link } from 'react-router-dom'

const btnValues = [
  ["C", "CE", "+-", "√", "/"],
  ["%", 7, 8, 9, "x"],
  ["^", 4, 5, 6, "-"],
  ["π", 1, 2, 3, "+"],
  ["e", 0, ".", "="],
];

function Calc() {
    return (
      <CalcProvider>
        <Wrapper>
          <Screen/>
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    );
}

export default Calc;