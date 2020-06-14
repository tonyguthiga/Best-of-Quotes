import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() emitupVote = new EventEmitter<any>();
  @Output() emitdownVote = new EventEmitter<any>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(){

  }

  upVote(quote){
    this.emitupVote.emit(quote);
  }
  downVote(quote){
    this.emitdownVote.emit(quote);
  }
}
