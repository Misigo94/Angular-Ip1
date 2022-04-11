import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  likes: number;
  deleteQuote(read: boolean) {
    this.isRead.emit(read);
  }

  upVote() {
    this.quote.likes += 1;
  }
  
  downVote() {
    this.quote.dislikes += 1;
  }

  constructor() { }

  ngOnInit() : void {
  }

}
