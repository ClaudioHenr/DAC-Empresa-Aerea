import { Injectable } from '@angular/core';
import axios from 'axios';
import { Authentication } from '../../../../shared/models/Authentication.model';
import { StorageService } from '../../../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login';

  constructor(private storageService: StorageService) { }

  async login(auth: Authentication) {
    try {
      const result = await axios.post(this.url, auth);
      return result;
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      throw error;
    }
  }

  setLocalStorage(key: string, data: any): void {
    this.storageService.setItem(key, data);
  }

  getLocalStorage(key: string): any {
    return this.storageService.getItem(key);
  }

  removeLocalStorage(key: string): void {
    this.storageService.removeItem(key);
  }

  clearLocalStorage(): void {
    this.storageService.clear();
  }
}