import { Injectable } from '@angular/core';
// Add swapiComponent

// Add the httpClientnpm
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfApiService {

  // private swApiUrl: `${}`;
  constructor(private http: HttpClient) { }
}
