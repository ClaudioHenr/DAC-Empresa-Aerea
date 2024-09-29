import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login'

  constructor() { }

  login(login: string | undefined, password: string | undefined) {
    const data = {login, password}
    const result = axios.post(this.url, data)
    console.log("RESULT SERVICE:", result)
    return result
  }
}
