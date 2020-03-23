import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import 'regenerator-runtime/runtime';
import Content from './Content';

const App = () => (
  <BrowserRouter>
    <Header />
    <Content />
  </BrowserRouter>
);
export default App;
