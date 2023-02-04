import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {

  calculatorForm: FormGroup;
  result:number;

  constructor(formBuilder: FormBuilder){
    this.calculatorForm = formBuilder.group(
      {
        Number1: ["",Validators.required],
        Number2: ["",Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }
  

  answer(){
    this.result = this.calculatorForm.value.Number1 % this.calculatorForm.value.Number2;
  }

}
