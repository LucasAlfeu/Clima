import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from 'Components/Banner';
import Menu from 'Components/Menu';
import Inicio from 'Pages/Inicio';
import Footer from 'Components/Footer';
import Curiosidades from 'Pages/Curiosidades';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>                
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/curiosidades' element={<Curiosidades />} />
                </Routes>
            </Router>
        </main>
    );
}