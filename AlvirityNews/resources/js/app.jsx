
import './bootstrap';
import '/public/build/assets/app.c0.css';
import App from './components/App';
import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import AppRouts from './components/routing/AppRouts';
import NavBar from './components/UI/NavBar';
import FooTer from './components/UI/FooTer';
if(document.getElementById('app'))
{
    const root = ReactDom.createRoot(document.getElementById('app'));
    
    root.render(
    <BrowserRouter>
         <NavBar/>
         <AppRouts/>
         <FooTer/>
    </BrowserRouter>
        

        );
    
}
