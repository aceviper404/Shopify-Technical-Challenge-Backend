import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model/Item';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  itemToEdit = {
    name: '',
    price: 0,
    description: ''
  }

  showMsg: boolean = false;

  constructor(private httpClientService: HttpClientService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClientService.getItem(this.route.snapshot.params['id']).subscribe(
      response => {console.log(response);
      console.log(this.route.snapshot.params['id']);
      this.itemToEdit = {
        name: response['name'],
        price: response['price'],
        description: response['description']
      }
    }
    )
  }

  editItem(){
    this.httpClientService.editItem(this.route.snapshot.params['id'], this.itemToEdit).subscribe(
      response =>{
        console.log("EDITED!!", response);
        this.showMsg=true;
      }
    )
  }

}
