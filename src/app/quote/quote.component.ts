import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1,name:'Life is about making an impact, not making an income.',author:'Kevin Kruse',submittedBy:'Tony Guthiga',date: new Date(2020,8,14)},
    {id:2,name:'Behind every successful person, lies a pack of haters.',author:'Eminem',submittedBy:'King Kaka',date: new Date(2019,6,13)},
    {id:3,name:'It is not important to win, it is important to make the other guy lose.',author:'Anonymous',submittedBy:'Nonini',date: new Date(2018,3,24)},
  ]

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(){
  }

}
