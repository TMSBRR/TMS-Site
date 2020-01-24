import { Component, OnInit } from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {faHandshake} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
	HomeIcon = faHome;
	CodeIcon = faLaptopCode;
	BookIcon = faLanguage;
	InfoIcon = faInfoCircle;
	HandIcon = faHandshake;

  constructor() { }

  ngOnInit() {
	  
	  	  
  }

}
