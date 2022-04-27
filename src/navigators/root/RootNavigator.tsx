import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../components/pages/About';
import { HomePage } from '../../components/pages/Home';
import { RegisterPage } from '../../components/pages/Register';

const RootNavigator = ({}): React.ReactElement => {
  return (
    <React.Suspense fallback={<div>loading routes...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default RootNavigator;
