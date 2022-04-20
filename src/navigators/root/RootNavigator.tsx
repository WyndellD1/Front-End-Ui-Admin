import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../components/pages/About';
import { RegisterPage } from '../../components/pages/Register';
import { TodoPage } from '../../components/pages/Todo';

const RootNavigator = (): React.ReactElement => {
  return (
    <React.Suspense fallback={<div>loading routes...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="home" element={<TodoPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default RootNavigator;
