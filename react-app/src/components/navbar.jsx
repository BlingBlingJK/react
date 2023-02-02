import React, { Component } from "react";
// class NavBar extends Component {
//   state = {}; //无state信息，可写为另一种形式
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             Navbar <span>Boxes Count :{this.props.boxesCount}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }
// export default NavBar;

//sfc方法，记得把所有this删掉
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar <span>Boxes Count :{props.boxesCount}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
