import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
myproducts:any[] = [];
constructor(private http:HttpClient){
this.getProduct();
}

getProduct(){
  this.http.get("http://localhost:5204/api/Product").subscribe((resuilt:any)=>{
    this.myproducts = resuilt;
    console.log(resuilt);
  })
}

}
