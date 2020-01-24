import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
 @HostBinding("attr.class") cssClass = "col-md-4";
  tools: string[];

  constructor() { 
  
  this.tools = ["android.png", "angular.png", "bit.jpg", "bootstrap.png", "csharp.png", "css3.jpeg", "git.png", "html5.png", "ionic.png", "java.jpeg", "jquery.jpeg", "js.png", "no.png", "php.png", "python.png", "react.jpeg", "sublime.jpg", "ts.png", "vscode.png"]
  
  }

  ngOnInit() {
  }

}
