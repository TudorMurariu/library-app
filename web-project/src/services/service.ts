import axios from 'axios';
import User from '../entities/User';
import Book from '../entities/Book';

const API_BASE_URL = 'http://localhost:8080';

const ApiService = {
  // Users API Calls
  getUsers: async (): Promise<User[]> => {
    try {
      const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  getUserById: async (id: string): Promise<User> => {
    try {
      const response = await axios.get<User>(`${API_BASE_URL}/users/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  getUserByUserName: async (userName: string): Promise<User> => {
    try {
      const response = await axios.get<User>(`${API_BASE_URL}/users/name/${userName}`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  createUser: async (userData: Partial<User>): Promise<User> => {
    try {
      const response = await axios.post<User>(`${API_BASE_URL}/users`, userData);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    try {
      const response = await axios.put<User>(`${API_BASE_URL}/users/${id}`, userData);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  deleteUser: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  // Books API Calls
  getBooks: async (): Promise<Book[]> => {
    try {
      const response = await axios.get<Book[]>(`${API_BASE_URL}/books`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  getBookById: async (id: string): Promise<Book> => {
    try {
      const response = await axios.get<Book>(`${API_BASE_URL}/books/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  createBook: async (bookData: Partial<Book>): Promise<Book> => {
    try {
      const response = await axios.post<Book>(`${API_BASE_URL}/books`, bookData);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  updateBook: async (id: string, bookData: Partial<Book>): Promise<Book> => {
    try {
      const response = await axios.put<Book>(`${API_BASE_URL}/books/${id}`, bookData);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },

  deleteBook: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${id}`);
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default ApiService;