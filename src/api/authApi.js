import axios from 'axios';

const API_URL = 'https://localhost:7109/api'; // Update this to match your API URL

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/signup`, userData);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/Auth/login`, loginData);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/User/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User Info Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/Auth/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Logout Response:', response.data);
    localStorage.removeItem('token'); // Remove the token from local storage
    return response.data;
  } catch (error) {
    console.error('Logout Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};