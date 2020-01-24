import { Component, OnInit, Input} from '@angular/core';
import {Idioma} from "../../assets/Idioma";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
	
@Input() valor;
@Input() valor2;
			

  constructor() { }

  ngOnInit() {
  }

}
