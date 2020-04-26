import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResolveService {
  endpoint = 'https://jsonplaceholder.typicode.com/posts/';
  
  constructor(private http: HttpClient) {}
  
  getPosts() {
    
    return this.http.get(this.endpoint);
  }
}