import React, {Component} from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  addDecimal = val => {
// adiciona apenas decimal se não houver nenhum ponto decimal atual na área de entrada
    if (this.state.input.indexOf(".") === -1) {
      this.setState({input: this.state.input + val});
    }
  };

//   addZeroToInput = val => {
//
// // se this.state.input não estiver vazio, adicione zero
// // //     if (this.state.input !== "") {
//       this.setState({ input: this.state.input + val });
//     }
//   };

  apagar = () => {
    this.setState({input: ""});
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "add";
  };
  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "add") {
      this.setState({

        input:
            parseFloat(this.state.previousNumber) +
            parseFloat(this.state.currentNumber)
      });
    }
    if (this.state.operator == "subtract") {
      this.setState({
        input:
            parseFloat(this.state.previousNumber) -
            parseFloat(this.state.currentNumber)
      });

    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
            parseFloat(this.state.previousNumber) *
            parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input:
            parseFloat(this.state.previousNumber) /
            parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
        <div className="App">
          <div className="calculadora">
            <center><h1>Calculadora</h1></center>
            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.multiply}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={this.evaluate}>=</Button>
              <Button handleClick={this.subtract}>-</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={this.apagar}>Apagar</ClearButton>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
