import axios, { AxiosInstance } from "axios";

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async getUsers() {
    return this.axiosInstance.get("/users");
  }

  async getUserById(userId: string) {
    return this.axiosInstance.get(`/users/${userId}`);
  }

  async getUserByUserName(userName: string) {
    return this.axiosInstance.get(`/users/name/${userName}`);
  }

  async createUser(user: { name: string; email: string }) {
    return this.axiosInstance.post("/users", user);
  }

  async updateUser(userId: string, user: { name?: string; email?: string }) {
    return this.axiosInstance.put(`/users/${userId}`, user);
  }

  async deleteUser(userId: string) {
    return this.axiosInstance.delete(`/users/${userId}`);
  }

  async getBooks() {
    return this.axiosInstance.get("/books");
  }

  async getBookById(bookId: string) {
    return this.axiosInstance.get(`/books/${bookId}`);
  }

  async createBook(book: { title: string; author: string }) {
    return this.axiosInstance.post("/books", book);
  }

  async updateBook(bookId: string, book: { title?: string; author?: string }) {
    return this.axiosInstance.put(`/books/${bookId}`, book);
  }

  async deleteBook(bookId: string) {
    return this.axiosInstance.delete(`/books/${bookId}`);
  }
}

export default new ApiService("https://localhost:8080");