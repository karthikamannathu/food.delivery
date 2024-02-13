import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from "react-redux";
import {persistor, store } from "../Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "../Navigation/Navigation.jsx";



const container = document.getElementById('roots');

const root= createRoot(container)
root.render(<Provider store={store}>
  <PersistGate persistor={persistor} loading={null}>
  <Navigation/>
  </PersistGate>
 </Provider>)




