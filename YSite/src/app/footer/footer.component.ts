import { Component, OnInit } from '@angular/core';
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

RegIcon = faCopyright;
EnIcon = faEnvelope;
PhIcon = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
