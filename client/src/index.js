import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <div  className="bg-body-secondary">
    <App />
    </div>
 
);


reportWebVitals();
