import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import api from '../config/api';

@Injectable()

export class ApiService {

  private baseUrl = api.api_url;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = api.api_url;
  }

  post(url: string, data: any = {}):Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }

  /**
   * Efetua requisição do tipo post
   * @param url Sufixo url
   * @param data Parametros enviados na requisição
   */
  async postAsync(url: string, data: any = {}):Promise<any> {
    try {
      return await this.http.post(`${this.baseUrl}${url}`, data).toPromise();
    } catch (e) {
      throw e;
    }
  }

  put(url: string, data: any = {}):Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data);
  }

  /**
   * Efetua requisição do tipo put
   * @param url Sufixo url
   * @param data Parametros enviados na requisição
   */
  async putAsync(url: string, data: object = {}):Promise<any> {
    try {
      return await this.http.put(`${this.baseUrl}${url}`, data).toPromise();
    } catch (e) {
      throw e;
    }
  }

  get(url: string):Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  async getAsync(url: string):Promise<any> {
    try {
      return await this.http.get(`${this.baseUrl}${url}`).toPromise();
    } catch (e) {
      throw e;
    }
  }

}
