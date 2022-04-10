import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to inspiration quotes';
  quotes:Quote[] = [
      new Quote(1, "Martin", "Life", "Be yourself; everyone else is already taken", "Erica mena", new Date(2019, 7, 16), 0, 0),
      new Quote(2, "Kevin", "Life", "Follow your own star!", "Rocky Johson", new Date(2019, 8, 16), 0, 0),
      new Quote(3,"Bibi","Life","The most exhausting thing in life is being insincere","Wlifred ndindi",new Date(2020,2,3),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}