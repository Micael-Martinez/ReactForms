import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import FilterCategories from './components/FilterCategories';
import Line from './components/Line'
import FormNoControlado from './components/FormNoControlado';
import FormControlado from './components/FormControlado';
import FormOnlyLowerCase from './components/FormOnlyLowerCase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Line />
        <FilterCategories />
        <Line />
        <FormNoControlado />
        <Line />
        <FormControlado />
        <Line />
        <FormOnlyLowerCase />

    </React.StrictMode>
);