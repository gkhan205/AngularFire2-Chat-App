import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import {AF} from "../../providers/af";
import {FirebaseListObservable} from "angularfire2";

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.messages = this.afService.messages;
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }
  
  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnInit() {}

}