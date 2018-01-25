import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "There no servers";
  serverCreadted: boolean = false;
newServerName: string = "name-placeholder";
servers = ['Test1', 'Test2', 'Test3'];

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000 );

   }

  ngOnInit() {
  }

onAddNewServer(){
  this.serverCreationStatus ="New server has been created";
  this.serverCreated = true;

}

onInput($event){
  this.newServerName = $event.target.value;
  //alert($event.target.value);
}

}
