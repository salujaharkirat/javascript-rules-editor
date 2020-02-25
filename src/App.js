import React from 'react';
import {Provider} from 'react-redux'

import store from "./configureStore";
import Home from "screens/Home";



function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App;
