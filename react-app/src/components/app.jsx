import React, { Component } from "react"; //imrc
import NavBar from "./navbar";
import Boxes from "./boxes";
class App extends Component {
  state = {
    boxes: [
      { id: 1, x: 1 },
      { id: 2, x: 2 },
      { id: 3, x: 3 },
      { id: 4, x: 4 },
    ],
  };
  handleClickLeft = (box) => {
    const boxes = [...this.state.boxes]; //为了不修改原数组内的值，所以新复制了一个数组
    const k = boxes.indexOf(box); //找下标；
    boxes[k] = { ...boxes[k] }; //...是解构，展开
    boxes[k].x--;
    this.setState({ boxes });
  };

  handleClickRight = (box) => {
    const boxes = [...this.state.boxes]; //为了不修改原数组内的值，所以新复制了一个数组
    const k = boxes.indexOf(box); //找下标；
    boxes[k] = { ...boxes[k] }; //...是解构，展开
    boxes[k].x++;
    this.setState({ boxes });
  };

  handleReset = () => {
    const boxes = this.state.boxes.map((b) => {
      return {
        id: b.id,
        x: 0,
      };
    });
    this.setState({ boxes });
    // console.log(this.state);
  };

  handleDelete = (boxId) => {
    const boxes = this.state.boxes.filter((b) => b.id !== boxId);
    this.setState({ boxes });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar boxesCount={this.state.boxes.filter((b) => b.x !== 0).length} />
        <div className="container">
          <Boxes
            boxes={this.state.boxes}
            OnReset={this.handleReset}
            OnClickLeft={this.handleClickLeft}
            OnClickRight={this.handleClickRight}
            OnDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
