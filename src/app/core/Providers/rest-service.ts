import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly _baseUrl: string = environment.apiUrl;

  public constructor(
    private readonly _httpClient: HttpClient
    
  ) { }

  public get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this._httpClient.get<T>(`${this._baseUrl}${url}`, { params, headers });
  }

  public post<T>(url: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this._httpClient.post<T>(`${this._baseUrl}${url}`, body, { headers });
  }

  public put<T>(url: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this._httpClient.put<T>(`${this._baseUrl}${url}`, body, { headers });
  }

  public patch<T>(url: string, body: unknown, headers?: HttpHeaders): Observable<T> {
    return this._httpClient.patch<T>(`${this._baseUrl}${url}`, body, { headers });
  }

  public delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this._httpClient.delete<T>(`${this._baseUrl}${url}`, { params, headers });
  }
}