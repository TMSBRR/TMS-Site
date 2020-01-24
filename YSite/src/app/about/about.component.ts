import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";


//implement -- button or invert it with Javascript

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	plusIcon = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }

}
