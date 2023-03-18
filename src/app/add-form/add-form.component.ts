import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  productForm!:FormGroup;

  constructor(private fb:FormBuilder,private hero:HeroService,private route:Router){
    this.productForm = this.fb.group({
      title:['',Validators.required],
      dec:['',Validators.required],
      price:['',Validators.required],
    })
  }

  


  addItem(){
    const product= this.productForm.value;
    console.log(product);
    this.hero.sendData(product).then((res)=>{
      if(res){
        console.log(res);
        alert("Data Added");
        this.productForm.reset();
        this.route.navigate(['']);
      }
    });
  }
  
  

}
