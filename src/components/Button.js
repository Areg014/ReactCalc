import { useContext } from "react";
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
    '+-': 'opt',
    '√': 'opt',
    'C': 'opt',
    'CE': 'opt',
    '%': 'opt',
    '^': 'opt',
    'π': 'opt',
    'e': 'opt',
  }
  return className[btn]
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }
  //Reset
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }
  //CE
  const backspaceClick = () => {
    setCalc({
      num: calc.num ? Math.trunc(calc.num / 10) : 0,
      res: calc.res ? Math.trunc(calc.res / 10) : 0,
      sign: ''
    })
  }
  //Number
  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  
  const signClick = () => {
    if(!(calc.res && calc.num)){
      setCalc({
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0
      })
    }
    else {
      if(calc.res && calc.num) {
        const math = (a, b, sign) => {
          const result = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'x': (a, b) => a * b,
            '/': (a, b) => a / b,
            '%': (a, b) => a % b,
            '^': (a, b) => Math.pow(a, b),
          }
          return result[sign](a, b);
        }
        setCalc({
          res: math(calc.res, calc.num, calc.sign),
          sign: value,
          num: 0
        })
      }
    }
  }
  //Equals
  const equalsClick = () => {
    if(calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
          '%': (a, b) => a % b,
          '^': (a, b) => Math.pow(a, b),
        }
        return result[sign](a, b);
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }
  //Square Root
  const rootClick = () => {
    setCalc({
      num: (Math.sqrt(calc.num)),
      res: (Math.sqrt(calc.res)),
      sign: ''
    })
  }

  //PI
  const piClick = () => {
    const numberString = Math.PI.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  //e
  const eClick = () => {
    const numberString = Math.E.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  
  //Invert Signs
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  const handleBtnClick = () => {
    
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '^': signClick,
      '%': signClick,
      '=': equalsClick,
      '√': rootClick,
      '+-': invertClick,
      'CE': backspaceClick,
      'e': eClick,
      'π': piClick
    }
    if(results[value]) {
      return results[value]()
    }
    else {
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button