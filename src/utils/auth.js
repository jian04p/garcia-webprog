export const getStoredToken = () => localStorage.getItem('token') || '';

export const getStoredUserType = () => localStorage.getItem('type') || '';

export const getStoredFirstName = () => localStorage.getItem('firstName') || '';

export const clearStoredSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('type');
  localStorage.removeItem('firstName');
};
