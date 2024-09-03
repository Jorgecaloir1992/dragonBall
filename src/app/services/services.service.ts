import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  Character() {
    return this.http.get(environment.apiUrl + '/characters?' + 'page=1&limit=100');
  }
}
