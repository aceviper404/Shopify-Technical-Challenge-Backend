import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/Item';
import { HttpClientService } from '../service/http-client.service';
import { ngxCsv } from 'ngx-csv'; 

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Array<Item>;
  showMsg: boolean = false;

  

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getItems().subscribe(
      response =>this.handleResponse(response),
    );

  }

  handleResponse(response){
    this.items = response;
  }

  deleteItem(item){
   this.httpClientService.deleteItem(item.id).subscribe(
     response => {
      console.log("deleted item: ", response);
      this.httpClientService.getItems().subscribe(
        response =>this.handleResponse(response),
      );
     }
   )
   
  }

  editItem(item: Item){

  }

  fileDownload(){
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Inventory Data',
      useBom: true,
      headers: ["name", "price", "description"]
    };
   
    new ngxCsv(this.items, "Inventory Data", options);
  }



}
