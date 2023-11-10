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

  getQuotesByMood(mood: string): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map(quotes => {
        const filteredQuotes = quotes.filter(quote => quote.categories.includes(mood));
        return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
      })
    );
  }
}