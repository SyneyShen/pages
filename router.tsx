import { useEffect } from 'react';
import React = require('react');
import { useCookies } from 'react-cookie';
import { Routes, Route } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
import App from './App';
import Commodity from './commodity';
import LoginPage from './login';
import Main from './main';
import HotMarket from './market';
import NavigationBar from './navigation';
import Trend from './trend';

const AppRouter = ({ lang }) => {
  console.log('123123123123 lang from index.tsx is ', lang);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<NavigationBar />}>
        <Route index element={<Main />} />
        <Route path="market" element={<HotMarket />} />
        <Route path="trend" element={<Trend />} />
        <Route path="commodity" element={<Commodity />} />
      </Route>
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default AppRouter;
