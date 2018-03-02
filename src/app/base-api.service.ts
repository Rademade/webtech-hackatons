import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BaseApiService {
  public apiUrl =  'http://192.168.1.43:3000/api/v1/';
  public modelUrl;
  constructor(
    private http: Http
  ) { }

  index() {
    return this.http.get(this.apiUrl + this.modelUrl);
  }
  create(data: {}) {
    return this.http.post(this.apiUrl +  this.modelUrl, data);
  }
  update(id: number, data: {}) {
    return this.http.put(this.apiUrl + this.modelUrl + '/' + id, data);
  }
  destroy(id: number) {
    return this.http.delete(this.apiUrl + this.modelUrl + '/' + id);
  }
}
