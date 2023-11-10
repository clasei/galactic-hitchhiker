import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = './assets/data/galaxy-hitchhiker-quotes.json';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}

