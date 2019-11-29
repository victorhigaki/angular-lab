import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BaseService {
  http: HttpClient;
  controller: string;
  baseUrl = `https://jsonplaceholder.typicode.com`;
  options = {
    headers: new HttpHeaders({
      "Content-type": "application/json; charset=UTF-8"
    })
  };

  constructor(http: HttpClient) {
    this.http = http;
  }

  get<T>(url: string, httpParams?) {
    return this.http.get<T>(url, httpParams);
  }

  post(url: string, httpParams) {
    return this.http.post(url, httpParams);
  }

  put(url: string, httpParams) {
    return this.http.put(url, httpParams);
  }

  delete(url: string, httpParams) {
    return this.http.delete(url, httpParams);
  }

  listAll() {
    const url = `${this.baseUrl}/${this.controller}`;
    console.log(url);
    return this.get(url, this.options);
  }

  getById(id: string) {
    const url = `${this.baseUrl}/${this.controller}/${id}`;
    return this.get(url);
  }

  create() {}

  edit() {}

  deletee;
}
