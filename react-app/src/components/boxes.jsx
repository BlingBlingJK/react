import React, { Component } from "react";
import Box from "./box";
const Boxes = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.OnReset} className="btn btn-info m-2">
        Reset
      </button>
      {props.boxes.map((box) => (
        <Box
          key={box.id}
          box={box}
          onClickLeft={() => props.OnClickLeft(box)}
          onClickRight={() => props.OnClickRight(box)}
          onDelete={props.OnDelete}
        />
      ))}
    </React.Fragment>
  );
};

export default Boxes;
// class Boxes extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={this.props.OnReset} className="btn btn-info m-2">
//           Reset
//         </button>
//         {this.props.boxes.map((box) => (
//           <Box
//             key={box.id}
//             box={box}
//             onClickLeft={() => this.props.OnClickLeft(box)}
//             onClickRight={() => this.props.OnClickRight(box)}
//             onDelete={this.props.OnDelete}
//           />
//         ))}
//       </React.Fragment>
//     );
//   }
// }

// export default Boxes;
