import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    console.log('login')
    const path = `${environment.apiUrl}/auth/login`;
    return this.http.post(path, {email, password})
  }
}
