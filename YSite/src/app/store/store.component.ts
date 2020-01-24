import { Component, OnInit, Input} from '@angular/core';
import {Tienda} from "../../assets/Tienda"

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
	
@Input() valorweb: Tienda;
@Input() valorimg: Tienda;
	
  constructor() {
		
  }

  ngOnInit() {
  }

}
