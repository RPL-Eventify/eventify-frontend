const baseURL = process.env.NEXT_PUBLIC_APP_API_URL;

const PATH = {
  login: `${baseURL}/api/v1/user/login/`,
  logout: `${baseURL}/api/v1/user/logout/`,
  currentUser: `${baseURL}/api/v1/user/`,
  refreshToken: `${baseURL}/api/v1/token/refresh/`,
  register: `${baseURL}/api/v1/user/register/`,
};

export default PATH;