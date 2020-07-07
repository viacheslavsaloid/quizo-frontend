import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/models/root/api.model';

@Injectable()
export class ApiService {
  private _url = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  get = <T>(url: string, options?: object) =>
    this._httpClient.get<ApiResponse<T>>(this._url + url, options).toPromise();

  post = async <T>(url: string, body: any, options?: object) =>
    this._httpClient.post<ApiResponse<T>>(this._url + url, body, options).toPromise();

  patch = async <T>(url: string, body: any, options?: object) =>
    this._httpClient.patch<ApiResponse<T>>(this._url + url, body, options).toPromise();

  delete = <T>(url: string, options?: object) =>
    this._httpClient.delete<ApiResponse<T>>(this._url + url, options).toPromise();
}
