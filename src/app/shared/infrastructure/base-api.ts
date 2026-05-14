/**
 * @summary Base API class for handling HTTP requests.
 */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  protected http = inject(HttpClient);
  protected baseUrl = environment.baseUrl;

  protected get resourcePath(): string {
    return '';
  }

  protected get resourceUrl(): string {
    return `${this.baseUrl}${this.resourcePath}`;
  }
}
