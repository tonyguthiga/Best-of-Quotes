import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1,quote:'Life is about making an impact, not making an income.',author:'Kevin Kruse',submittedBy:'Tony Guthiga'},
    {id:2,quote:'Behind every successful person, lies a pack of haters.',author:'Eminem',submittedBy:'King Kaka'},
    {id:3,quote:'It is not important to win, it is important to make the other guy lose.',author:'Anonymous',submittedBy:'Nonini'},
  ]
  constructor() { }

  ngOnInit(){
  }

}
