import { User } from './../interface/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private Url = 'https://5f68184c38ce870016398abf.mockapi.io';
  // private apiLogin = ''
  constructor(private http: HttpClient) { }



  getUsers() {
    const url = `${this.Url}/users`
    return this.http.get(url)
  }

  getUser(id: number) {
    const url = `${this.Url}/users/${id}`
    return this.http.get(url)
  }

  addUser(user: User) {
    const url = `${this.Url}/users/`
    return this.http.post(url, user)
  }

  updateUser(user: User, id) {
    const url = `${this.Url}/users/${id}`
    return this.http.put(url, user)
  }

  deleteUser(id: number) {
    const url = `${this.Url}/users/${id}`
    return this.http.delete(url)
  }
}
