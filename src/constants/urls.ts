const API_URL = process.env.REACT_APP_API_URL || '';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

const urls = {
  auth: {
    csrf: `${BACKEND_URL}/sanctum/csrf-cookie`,
    login: `${API_URL}login`,
    signup: `${API_URL}register`,
    user: `${API_URL}user`,
    resendVerification: `${API_URL}email/verification-notification`,
  },
};

export type URLsType = typeof urls;

export default urls;
