import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'IP1';
  quote: Quote[] = [
    { name: "Martin", vote: 2, description: "good" },
    { name: "Mike", vote: 3, description: "very good" },
    {name:"Brian",vote:4,description:"bad"}
    
  ] 
}
