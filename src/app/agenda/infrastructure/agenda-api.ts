/**
 * @summary API service for agenda-related operations.
 */
import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';

@Injectable({
  providedIn: 'root'
})
export class AgendaApi extends BaseApi {
  override get resourcePath(): string {
    return '/appointments';
  }

  // Methods for CRUD would go here
}
