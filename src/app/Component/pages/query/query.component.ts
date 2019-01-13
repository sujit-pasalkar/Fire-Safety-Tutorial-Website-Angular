import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  public authForm: FormGroup;

  email:string;
  name:string;
  lastname:string;
  question:string;
  desc:string;


  constructor(public fb: FormBuilder,
    public router: Router,    
    ) {
      
    this.authForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      question: ['', Validators.compose([Validators.required])],
      desc: ['', Validators.compose([Validators.required,Validators.minLength(10)],)],
    });
   }

  ngOnInit() {
  }

  submit(){
    console.log('hjhj')
    this.router.navigate(['']);

  }

}
