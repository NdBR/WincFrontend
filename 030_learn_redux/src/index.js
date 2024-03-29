import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

import allReducers from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// NOTES EXCERSIZE

// import { createStore } from "redux";
// store : globalized state

// // action: describes what you wanna do
// const increment = () => {
// 	return {
// 		type: "INCREMENT",
// 	};
// };

// const decrement = () => {
// 	return {
// 		type: "DECREMENT",
// 	};
// };

// // reducer
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return state + 1;

// 		case "DECREMENT":
// 			return state - 1;
// 	}
// };
// let store = createStore(counter);
// // display it in the console
// store.subscribe(() => console.log(store.getState()));

// // dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
