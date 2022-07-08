import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../components/pages/About';
import { EmailVerifiedPage } from '../../components/pages/EmailVerified';
import { HomePage } from '../../components/pages/Home';
import { LoginPage } from '../../components/pages/Login';
import { RegisterPage } from '../../components/pages/Register';
import { SetProfilePage } from '../../components/pages/SetProfile';
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
      <Route path="verify-email-success" element={<EmailVerifiedPage />} />
    </Routes>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/about" />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="set-profile" element={<SetProfilePage />} />
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
