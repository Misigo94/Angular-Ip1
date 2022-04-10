import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePipePipe } from './date-count.pipe';
import { HighlightQouteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    DatePipePipe,
    HighlightQouteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
