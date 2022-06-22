import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../components/pages/About';
import { HomePage } from '../../components/pages/Home';
import { LoginPage } from '../../components/pages/Login';
import { RegisterPage } from '../../components/pages/Register';
import { useGlobalState } from '../../hooks/global';

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

const RootNavigator = (): React.ReactElement => {
  const {
    useCurrentUser: { currentUser },
  } = useGlobalState();

  return (
    <React.Suspense fallback={<div>loading routes...</div>}>
      <BrowserRouter>
        {currentUser?.user.isVerified ? (
          <ProtectedRoutes />
        ) : (
          <UnprotectedRoutes />
        )}
      </BrowserRouter>
    </React.Suspense>
  );
};

export default RootNavigator;
