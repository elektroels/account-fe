import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import Accounts from './features/accounts/Accounts';
import Transactions from './features/transactions/Transactions';
import NoRoute from './pages/NoRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Accounts />} />
                    <Route path=":id/transactions" element={<Transactions />} />
                    <Route path="*" element={<NoRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
