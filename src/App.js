import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Layout from './pages/Layout';
import Accounts from './features/accounts/Accounts';
import Transactions from './features/transactions/Transactions';
import NoRoute from './pages/NoRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Accounts />} />
            <Route path=":id/transactions" element={<Transactions />} />
            <Route path="*" element={<NoRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </div>
  );
}

export default App;
