import axios from 'axios';
import { API_BASE_URL } from '../constants';

const usersApi = `${API_BASE_URL}/users`;

const toClientUser = (user) => ({
  ...user,
  id: user._id || user.id,
  role: user.type || user.role || 'viewer',
});

const toServerUser = (user) => {
  const { id, _id, role, ...rest } = user;
  return {
    ...rest,
    type: role || user.type || 'viewer',
  };
};

export const fetchUsers = async () => {
  const { data } = await axios.get(usersApi);
  return {
    users: (data.users || []).map(toClientUser),
  };
};

export const createUser = async (user) => {
  const { data } = await axios.post(usersApi, toServerUser(user));
  return toClientUser(data);
};

export const updateUser = async (id, user) => {
  const { data } = await axios.put(`${usersApi}/${id}`, toServerUser(user));
  return toClientUser(data);
};

export const deleteUser = async (id) => {
  const { data } = await axios.delete(`${usersApi}/${id}`);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post(`${usersApi}/login`, credentials);
  return data;
};
