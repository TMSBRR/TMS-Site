import { Component, OnInit } from '@angular/core';
import {Idioma} from "../../assets/Idioma";

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
			
  languages: Idioma []= [
  {img:"../../assets/img/flags/ger.gif", nombre:"German"},
  {img:"../../assets/img/flags/china.gif", nombre:"Chinese"},
  {img:"../../assets/img/flags/rusia.gif", nombre:"Russian"},
  {img:"../../assets/img/flags/italy.gif", nombre:"Italian"},
  {img:"../../assets/img/flags/por.gif", nombre:"Portuguese"},
  {img:"../../assets/img/flags/france.gif", nombre:"French"}
  ];

		 languages2: Idioma []= [
  {img:"../../assets/img/flags/hungary.gif", nombre:"Hungarian"},
  {img:"../../assets/img/flags/israel.gif", nombre:"Hebrew"},
  {img:"../../assets/img/flags/japan.gif", nombre:"Japanese"},
  {img:"../../assets/img/flags/fin.gif", nombre:"Finnish"},
  {img:"../../assets/img/flags/greece.gif", nombre:"Greek"},
  {img:"../../assets/img/flags/nor.gif", nombre:"Norge"},
  {img:"../../assets/img/flags/iran.gif", nombre:"Farsi"},
  {img:"../../assets/img/flags/ned.gif", nombre:"Nederlands"},
  {img:"../../assets/img/flags/pol.gif", nombre:"Polish"},
  {img:"../../assets/img/flags/turkey.gif", nombre:"Turkish"},
  ];

  constructor() {}

  ngOnInit() {}

}

 

