import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inouttest',
  templateUrl: './inouttest.component.html',
  styleUrls: ['./inouttest.component.css']
})
export class InouttestComponent implements OnInit {


  @Input("name") content:string;
  @Output() sendColorInfo= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendColor(color:string){
    this.sendColorInfo.emit(color);
  }

}