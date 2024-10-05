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
      console.log("RESULT SERVICE:", result)
      return result 
    } catch (error) {
      console.error("Erro ao fazer login: ", error)
      throw error
    }
  }
}
