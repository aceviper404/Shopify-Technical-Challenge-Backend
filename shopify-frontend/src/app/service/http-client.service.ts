import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getItem(id){
    return this.httpClient.get<Item>('http://localhost:8080/inventory/'+id);
  }
  getItems(){
    return this.httpClient.get<Item[]>('http://localhost:8080/inventory/getAll');
  }

  addItem(item: Item){
    return this.httpClient.post<Item>('http://localhost:8080/inventory/addItem', item);
  }

  deleteItem(id){
    return this.httpClient.delete<Item>('http://localhost:8080/inventory/'+id);
  }

  editItem(id, item){
    return this.httpClient.put<Item>('http://localhost:8080/inventory/'+id, item);
  }
}
