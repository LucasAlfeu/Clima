import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Inicio from 'Pages/Inicio';
import AppRouter from 'router';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);
