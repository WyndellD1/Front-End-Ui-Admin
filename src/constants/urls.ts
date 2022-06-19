const API_URL = process.env.REACT_APP_API_URL || '';

const urls = {
  auth: {
    login: `${API_URL}signin`,
    signup: `${API_URL}register`,
  },
};

export type URLsType = typeof urls;

export default urls;
