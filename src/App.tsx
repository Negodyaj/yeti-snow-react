import './App.scss';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

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
          <Route path="profile" element={<ProfilePage />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
