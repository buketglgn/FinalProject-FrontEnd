import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;
  filterText="";
 
  constructor(private productService:ProductService,
     private activatedRoute: ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }//bir servisi kullanabilmek için yapmamız gereken bu.

  ngOnInit(): void {
    
    //bir observable params döndürdüğü için subscribe olmak gerekiyor.
    //birden fazla parametre olabilecegi için
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){//routerLink içerisinde parametrelerinin içerisinde categoryId diye bir sey var ise
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true; //data yüklendigi anda true yaptı.
      });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true; 
      });
      
  }

  addToCart(product:Product){
    if(product.productId===1){
      this.toastrService.error("hata"," bu ürün sepete eklenemez")
    }
    else{
      this.cartService.addToCart(product);
      this.toastrService.success("sepete eklendi", product.productName);
    }
    
  }

}
