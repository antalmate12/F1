import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  sec:number=0;
  min:number=0;
  break:boolean=false;

  start() {      
    console.log("start");
  }
  stop() {
    console.log("stop");
    this.break = true;
  }
  reset() {
    console.log("reset");
  }

}