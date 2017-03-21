import { Component, Input } from '@angular/core';
import {AF} from "../../providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 
 	@Input() isLoggedIn: boolean;

 	constructor(public afService: AF, private router: Router){}

 	logout() {
	  this.afService.logout();
	}
}