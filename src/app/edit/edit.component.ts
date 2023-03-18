import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  productForm!:FormGroup;

  constructor(private fb:FormBuilder,private hero:HeroService,private route:Router){
    this.productForm = this.fb.group({
      title:['',Validators.required],
      dec:['',Validators.required],
      price:['',Validators.required],
    })
  }

  ngOnInite(){
    this.getDataByid();
  }

  getDataByid(){
    let id = localStorage.getItem('doc_id');
    this.hero.getProductById(id).then((data:any)=>{
      console.log(data);

      this.productForm = this.fb.group({
        title:data.title,
        dec:data.dec,
        price:data.price,
      });
      
    });
  }


  update(){

  }



}
