import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./Action";
import reducer from "./Reducer"
import { Provider } from "react-redux";


// INITIAL STATE

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer />
    </Provider>
  );
}

export default App;
