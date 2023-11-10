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

  getQuotes(): Quote[] {
    return quotesData;
  }

  getQuotesByMood(mood: string): Quote[] {
    const filteredQuotes = quotesData.filter(quote => quote.categories.includes(mood));
    // one random quote from the filtered list
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      return [filteredQuotes[randomIndex]];
    }
    return []; // or return some default quote or empty array
  }
}
