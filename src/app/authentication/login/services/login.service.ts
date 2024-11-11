import { Injectable } from '@angular/core';
import axios from 'axios';
import { Authentication } from '../../../../shared/models/Authentication.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login'

  constructor() { }

  login(auth: Authentication) {
    try {
      const result = axios.post(this.url, auth)
      return result 
    } catch (error) {
      console.error("Erro ao fazer login: ", error)
      throw error
    }
  }
  
  setLocalStorage(key: string, data: string) {
    localStorage.setItem(key, JSON.stringify(data))
    
    const userInfo = this.getLocalStorage(key)
    console.log("User INFO local: ", userInfo)
  }

  getLocalStorage(key: string) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null;
  }
}
