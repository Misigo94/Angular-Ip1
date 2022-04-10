// import { DatePipe } from '@angular/common';
// import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
// import { Quote } from '../quote';

// @Component({
//   selector: 'app-quotes-form',
//   templateUrl: './quotes-form.component.html',
//   styleUrls: ['./quotes-form.component.css']
// })
// export class QuotesFormComponent implements OnInit {
//    newQuote = new Quote( 0,"", "", "" ,0,0);
//   @Output() addQuote = new EventEmitter<Quote>();

//   constructor() { }

//   ngOnInit(): void {
//   }
// }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit() {
  }

}
