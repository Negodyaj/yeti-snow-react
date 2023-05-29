import './App.scss';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { getValueFromLocalStorage, saveDataInLocalStorage } from './services/localStorage.service';
import React from 'react';

function App() {
  const dataFromLocalStorage: string = getValueFromLocalStorage('test1');
  console.log(dataFromLocalStorage);

  const handleClick = () => {
    saveDataInLocalStorage('test1', 42);
    saveDataInLocalStorage('test2', false);
    saveDataInLocalStorage('test3', 'hi there');
  };

  return (
    <>
      <Header />
      <h2>{dataFromLocalStorage}</h2>
      <button onClick={handleClick}>Save data</button>
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
