import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly client: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.client.get<UserModel[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
