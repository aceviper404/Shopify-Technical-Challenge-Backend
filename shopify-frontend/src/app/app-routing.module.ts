import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'edit-item/:id', component: EditItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
