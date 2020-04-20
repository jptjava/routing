import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  fruits:string[]=['apple','banana']

  color:string="red"

show:boolean=true;


clickMe(){

  console.log("clciked");
}

changeData(data:string){
  this.color=data;
}

}