import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../model/Item';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  @Input()
  item:Item = new Item();

  showMsg: boolean = false;

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
  }

  createItem(){
    this.httpClientService.addItem(this.item).subscribe(
      (response) => {
        console.log("Item Created: ",response);
        this.showMsg= true;
      }
    )
  }

  saveItem(login: NgForm){
    login.reset();
  }

}
