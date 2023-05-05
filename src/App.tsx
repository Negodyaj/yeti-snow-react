import React, { useState } from 'react';
import './App.scss';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

function App() {
  const [userName, setUserName] = useState('');
  const [userStatus, setUserStatus] = useState('');

  const setUserInfo = (name: string, status: string) => {
    setUserName(name);
    setUserStatus(status);
  }

  return (
    <>
      <Header userName={userName} userStatus={userStatus} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="login" element={<LoginPage setUserData={setUserInfo} />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
