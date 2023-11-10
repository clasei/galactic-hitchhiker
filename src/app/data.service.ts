import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Quote {
  quote: string;
  categories: string[]; // added to manage data type
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = './assets/data/galaxy-hitchhiker-quotes.json';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.jsonUrl);
  }

  getQuotesByMood(mood: string): Observable<Quote[]> {
    return this.getQuotes().pipe(
      map(quotes => quotes.filter(quote => quote.categories.includes(mood)))
    );
  }
}
