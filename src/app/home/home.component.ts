import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products!:Product[];

  constructor(private router: Router,private hero:HeroService){}

  ngOnInit() {
    this.getProduct();
  }



  getProduct() {
    this.hero.getProduct().subscribe((res: Product[]) => {
      this.products = res
    })
  }


  
  addProduct(){
    this.router.navigate(['add']);
  }

  
  editProduct(id:any){
    localStorage.setItem('doc_id',id) 
    this.router.navigate(['edit']);
  }
  removeP(){

  }

}
