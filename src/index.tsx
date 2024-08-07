import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth";
import Database from './components/Database';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/database' element={<Database/>}/>
        </Routes>
    </BrowserRouter>
);
