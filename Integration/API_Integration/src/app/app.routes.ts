import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductsComponent
     },
     {
        path:"addproduct",
        component:AddproductComponent
     }
];
