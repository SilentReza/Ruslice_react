// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// father component
import App from './App';
// report
import reportWebVitals from './reportWebVitals';
// router
import {BrowserRouter} from "react-router-dom";
// bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.css';
// render root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

reportWebVitals();
