import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/app";

const f1 = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "sub":
      return state - action.value;
    default:
      return state;
  }
};

const f2 = (state = ":", action) => {
  switch (action.type) {
    case "concat":
      return state + action.character;
    default:
      return state;
  }
};

// const f3 = (state = {}, action) => {
//   return {
//     f1: f1(state.f1, action),
//     f2: f2(state.f2, action),
//   };
// };
//等价于下面的函数用法：
const f3 = combineReducers({
  number: f1,
  string: f2,
});

const store = configureStore({
  //调用哪一个？f1,f2,f3
  reducer: f3,
});
// 测试方法
// store.subscribe(() => {
//   //每次都显示结果的函数
//   console.log(store.getState());
// });

// store.dispatch({ type: "add", value: 2 }); //改变值
// store.dispatch({ type: "add", value: 2 });
// store.dispatch({ type: "add", value: 2 });
// store.dispatch({ type: "concat", character: 2 });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
