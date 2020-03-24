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

 /**
  * Efetua requisição do tipo POST
  * @param url Sufixo url (sem host)
  * @param data Parametros enviados na requisição
  */
  post(url: string, data: object = {}):Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }

  /**
   * Efetua requisição do tipo POST
   * @param url Sufixo url (sem host)
   * @param data Parametros enviados na requisição
   */
  async postAsync(url: string, data: object = {}):Promise<any> {
    try {
      return await this.http.post(`${this.baseUrl}${url}`, data).toPromise();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Efetua requisição do tipo PUT
   * @param url Sufixo url (sem host)
   * @param data Parametros enviados na requisição
   */
  put(url: string, data: object = {}):Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data);
  }

  /**
   * Efetua requisição do tipo PUT
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

  /**
   * Efetua requisição do tipo GET
   * @param url Sufixo url
   */
  get(url: string):Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  /**
   * Efetua requisição do tipo GET
   * @param url Sufixo url
   */
  async getAsync(url: string):Promise<any> {
    try {
      return await this.http.get(`${this.baseUrl}${url}`).toPromise();
    } catch (e) {
      throw e;
    }
  }

}
