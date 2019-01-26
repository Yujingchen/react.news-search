import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// // payment system
// describe('payment should be properly', () => {
//   const apiCall = () => {}
//   const paymentSystem = <PaymentForm onSubmit={apiCall}/>
//   paymentSystem.find(<submit button>).simulate('click')
//   LoginSystem.find(<inputusername/>).simulate('type', "yizhaung@email")
//   LoginSystem.find(<inputpassword/>).simulate('type', "dsfdsfs@email")

//   expect(apiCall).hasBeenCalled()
// })

// lib.open('localhost:3000')
// lib.find(inputusername/>)

// describe("simple math", () => {
//   test("1+1=2", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

// describe("simple calculation", () => {
//   test(" 1 + 1 should equal2", () => {
//     expect(1 + 1).toBe(2);
//   });
//   test(" 1 + 2 should equal3", () => {
//     expect(1 + 2).toBe(3);
//   });
// });
