import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1,name:'Life is about making an impact, not making an income.',author:'Kevin Kruse',submittedBy:'Tony Guthiga',date: new Date(2020,8,14), upvote: 0,downvote: 0},
    {id:2,name:'Behind every successful person, lies a pack of haters.',author:'Eminem',submittedBy:'King Kaka',date: new Date(20,6,13),upvote: 0,downvote: 0},
    {id:3,name:'It is not important to win, it is important to make the other guy lose.',author:'Anonymous',submittedBy:'Nonini',date: new Date(2018,3,24),upvote: 0,downvote: 0},
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date);
    
    this.quotes.push(quote)
  }
  
  showForm: boolean = false

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
  
  addQuote(){
    this.showForm = true
  }
  hideForm(){
    this.showForm = false
  }

  upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;
    }
    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes+1;
    }
}
