import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

// tslint:disable-next-line:no-input-rename
@Input('Bravo') testTest: string;

@ViewChild('ServerName') serverName;

// tslint:disable-next-line:no-output-on-prefix
@Output() onComponentClicked = new EventEmitter<boolean>();

  constructor() { }



  ngOnInit(): void {
  }

    componentClicked(): void
    {
alert('Clicked!');
    }
  /*
  ComponentClicked(): void
  {
    this.onComponentClicked.emit(true);
    console.log(this.serverName);
  }
  */

}
