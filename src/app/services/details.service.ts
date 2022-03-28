import { Injectable } from '@angular/core';
import { Details } from '../models/user.model';
import { default as details } from '../users-details.json';
@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}

  getDetailsById(id: number): Details | undefined {
    return details.find((r) => r.id === id);
  }
}
