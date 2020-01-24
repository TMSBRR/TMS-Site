import { Component, OnInit } from '@angular/core';
import { Tienda } from "../../assets/Tienda";
import { Libro } from "../../assets/Libro";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	
	books: Libro [] = [ {
		Titulo: "Todo por ti", 
		imagen: "../../assets/img/books/todo.jpg", 
		idioma: "Francés", 
		autor: "Sara Agnès L.", 
		descripcion: "descripción",
		store: {
			img: "../../assets/img/stores/apple.jpeg",
			web: "https://books.apple.com/us/book/id1489987780"},
		store2: {
			img: "../../assets/img/stores/kobo.jpeg",
			web: "https://www.kobo.com/mx/en/ebook/todo-por-ti"},
		store3: {
			img: "../../assets/img/stores/bn.jpeg",
			web: "https://m.barnesandnoble.com/w/todo-por-ti-sara-agn-s-l/1135277155?ean=2940163698127"}
		
		
	}, {
		Titulo: "Aprenda a pensar por si mismo", 
		imagen: "../../assets/img/books/pensar.png", 
		idioma: "Portugués", 
		autor: "Rodrigo Chaves", 
		descripcion: "descripción",
		store: {
			img: "../../assets/img/stores/apple.jpeg",
			web: "https://books.apple.com/us/book/id1490590112"},
		store2: {
			img: "../../assets/img/stores/scribd.png",
			web: "https://es.scribd.com/book/438555241/Como-pensar-por-ti-mismo"},
		store3: {
			img: "../../assets/img/stores/kobo.jpeg",
			web: "https://www.kobo.com/mx/en/ebook/como-pensar-por-ti-mismo"}
					
	},{
		Titulo: "Raspberry Pi 4", 
		imagen: "../../assets/img/books/pi.jpg", 
		idioma: "Inglés", 
		autor: "Raphael Stone", 
		descripcion: "descripción",
		store: {
			img: "../../assets/img/stores/scribd.png",
			web: "https://es.scribd.com/book/438541518/Raspberry-Pi-4-Manual-Completo"},
		store2: {
			img: "../../assets/img/stores/kobo.jpeg",
			web: "https://www.kobo.com/us/en/ebook/raspberry-pi-4-manual-completo"},
		store3: {
			img: "",
			web: ""}
		
	},
	{
		Titulo: "Hábitos", 
		imagen: "../../assets/img/books/habitos.jpg", 
		idioma: "Inglés", 
		autor: "Roger Reklau", 
		descripcion: "descripción",
		store: {
			img: "../../assets/img/stores/amazon.png",
			web: "https://www.amazon.com/dp/B07YCBK2KJ"},
		store2: {
			img: "../../assets/img/stores/apple.jpeg",
			web: "https://books.apple.com/us/book/id1480741674"},
		store3: {
			img: "../../assets/img/stores/bn.jpeg",
			web: "https://m.barnesandnoble.com/w/h-bitos-roger-reklau/1133694039?ean=2940163597314"}
		
		
	},];
	
  constructor() { 
	
  
  
  }

  ngOnInit() {
  }

}
