import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
