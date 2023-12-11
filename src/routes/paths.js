const baseURL = process.env.NEXT_PUBLIC_APP_API_URL;

const PATH = {
  login: `${baseURL}/api/v1/user/login/`,
  logout: `${baseURL}/api/v1/user/logout/`,
  currentUser: `${baseURL}/api/v1/user/`,
  refreshToken: `${baseURL}/api/v1/token/refresh/`,
  projectsAcitivy: `${baseURL}/api/v1/aktivitas/?kategori=projects`,
  projectsEvent: `${baseURL}/api/v1/acara/?kategori=projects`,
  areasAcitivy: `${baseURL}/api/v1/aktivitas/?kategori=areas`,
  areasEvent: `${baseURL}/api/v1/acara/?kategori=areas`,
  resourcesAcitivy: `${baseURL}/api/v1/aktivitas/?kategori=resources`,
  resourcesEvent: `${baseURL}/api/v1/acara/?kategori=resources`,
  archivedAcitivy: `${baseURL}/api/v1/archived/aktivitas/`,
  archivedEvent: `${baseURL}/api/v1/archived/acara/`,
  register: `${baseURL}/api/v1/user/register/`,
  createEvent: `${baseURL}/api/v1/acara/`,
  createActivity: `${baseURL}/api/v1/aktivitas/`,
};

export default PATH;
export { baseURL };
