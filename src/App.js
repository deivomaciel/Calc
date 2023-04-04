import { useState } from "react";
import { calc } from "./useCases/calc";
import "./app.css"

function App() {
  let [iqualFlag, setIqualFlag] = useState(false)
  let [expression, setExpression] = useState('')
  const addCharOnEXpression = char => setExpression(expression += char)
  
  const showResult = () => {
    if(expression.length > 1) {
      const expressionArray = calc.filterNumbers(expression)
      const result = calc.calculateExpression(expressionArray)
      
      if(!Number.isInteger(result) && String(result).length > 4) {
        setExpression(result.toFixed(4))
      } else {
        setExpression(result)
      }
      setIqualFlag(true)
    }
  }

  const cleanDisplay = () => setExpression('')
  const removeLastChar = () => {
    if(!iqualFlag) {
      setExpression(expression.slice(0, -1))
      setIqualFlag(false)
    }
  }

  return (
    <div className="App">
      <div class="container">
        <main class="calc">
            <div class="display">
                <span>{expression}</span>
            </div>

            <div class="btn-container">
                <div className="btn-grid">
                  <button className="btn orange" onClick={removeLastChar}>
                    <span>DEL</span>
                  </button>

                  <button className="btn orange" onClick={cleanDisplay}>
                    <span>AC</span>
                  </button>

                  <button className="btn orange" onClick={() => addCharOnEXpression('x')}>
                    <span>X</span>
                  </button>

                  <button className="btn orange" onClick={() => addCharOnEXpression('-')}>
                    <span>-</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('7')}>
                    <span>7</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('8')}>
                    <span>8</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('9')}>
                    <span>9</span>
                  </button>

                  <button className="btn orange" onClick={() => addCharOnEXpression('/')}>
                    <span>/</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('4')}>
                    <span>4</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('5')}>
                    <span>5</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('6')}>
                    <span>6</span>
                  </button>

                  <button className="btn orange" onClick={() => addCharOnEXpression('+')}>
                    <span>+</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('1')}>
                    <span>1</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('2')}>
                    <span>2</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('3')}>
                    <span>3</span>
                  </button>

                  <button className="btn orange" onClick={showResult}>
                    <span>=</span>
                  </button>
                </div>
                
                <div className="zero-container">
                  <button id='btn-zero' className="btn" onClick={() => addCharOnEXpression('0')}>
                    <span>0</span>
                  </button>

                  <button className="btn" onClick={() => addCharOnEXpression('.')}>
                    <span>,</span>
                  </button>
                </div>
            </div>
        </main>
    </div>
    </div>
  );
}

export default App;
