import React, { Component } from "react";
import Base from "./base";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton";
import ACTIONS from "../redux/actions";
import OperationButton from "./calculator/operationButton";

class Calculator extends Component {
  state = {
    fomater: Intl.NumberFormat("en-us"),
  };

  format = (number) => {
    if (number === "") return "";
    const [integer, decimal] = number.split(".");
    if (decimal === undefined) return this.state.fomater.format(integer);
    return `${this.state.fomater.format(integer)}.${decimal}`;
  };

  render() {
    return (
      <Base>
        <div className="outer">
          <div className="calculator">
            <div className="output">
              <div className="last-output">
                {this.format(this.props.lastOperand)}
                {this.props.operation}
              </div>
              <div className="current-output">
                {this.format(this.props.currentOperand)}
              </div>
            </div>
            <button onClick={this.props.clear} className="span-12">
              AC
            </button>
            <button onClick={this.props.delete_digit}>Del</button>
            <OperationButton operation="÷" />
            <DigitButton digit={"7"}></DigitButton>
            <DigitButton digit={"8"}></DigitButton>
            <DigitButton digit={"9"}></DigitButton>
            <OperationButton operation="×" />
            <DigitButton digit={"4"}></DigitButton>
            <DigitButton digit={"5"}></DigitButton>
            <DigitButton digit={"6"}></DigitButton>
            <OperationButton operation="-" />
            <DigitButton digit={"1"}></DigitButton>
            <DigitButton digit={"2"}></DigitButton>
            <DigitButton digit={"3"}></DigitButton>
            <OperationButton operation="+" />
            <DigitButton digit={"0"}></DigitButton>
            <DigitButton digit={"."}></DigitButton>
            <button onClick={this.props.evaluate} className="span-32">
              =
            </button>
          </div>
        </div>
      </Base>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    currentOperand: state.currentOperand,
    lastOperand: state.lastOperand,
    operation: state.operation,
  };
};
const mapDispatchToProps = {
  delete_digit: () => {
    return {
      type: ACTIONS.DELETE_DIGIT,
    };
  },
  clear: () => {
    return { type: ACTIONS.CLEAR };
  },
  evaluate: () => {
    return { type: ACTIONS.EVALUATE };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
