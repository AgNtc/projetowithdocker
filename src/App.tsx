import React from 'react';
import Modal from 'react-modal';
import { Index } from './Pages/Home/Index';
import { GlobalStyle } from './styles/global';

Modal.setAppElement("#root");

function App() {
  return (
    <>
    <Index />
    <GlobalStyle />
    </>
  );
}

export default App;
