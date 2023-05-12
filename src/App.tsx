import React, { useState } from 'react';
import './App.scss';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ProductPage } from './pages/ProductPage/ProductPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="product" element={<ProductPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
