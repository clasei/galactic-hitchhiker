import { Injectable } from '@angular/core';
import quotesData from '../assets/data/galaxy-hitchhiker-quotes.json';

interface Quote {
  quote: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQuotes(): Quote[] {
    return quotesData;
  }

  getQuotesByMood(mood: string): Quote | null {
    const filteredQuotes = quotesData.filter(quote => quote.categories.includes(mood));
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      return filteredQuotes[randomIndex];
    }
    return null;
  }
}
