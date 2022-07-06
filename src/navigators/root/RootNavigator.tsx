import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../components/pages/About';
import { HomePage } from '../../components/pages/Home';
import { LoginPage } from '../../components/pages/Login';
import { RegisterPage } from '../../components/pages/Register';
import { VerifyEmailPage } from '../../components/pages/VerifyEmail';
import { useGlobalState } from '../../hooks/global';

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="verify-email" element={<VerifyEmailPage />} />
    </Routes>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/about" />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
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
