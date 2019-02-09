import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material';
// import { AuthService } from "../../../Services/auth/auth.service";
import {MailService} from "../../../Services/mail/mail.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers, Response, URLSearchParams } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/functions");

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  public authFormQ: FormGroup;
  public authFormF: FormGroup;


  showQuery: boolean = true;
  selectedOption: string = "Query";

  email: string;
  name: string;
  lastname: string;
  question: string;
  desc: string;


  constructor(public fb: FormBuilder,
    public router: Router,
    // public authService: AuthService,
    private http: HttpClient,
    private mailService: MailService

  ) {

    this.authFormQ = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      // question: ['', Validators.compose([Validators.required])],
      question: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });

    this.authFormF = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      // question: ['', Validators.compose([Validators.required])],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  ngOnInit() {
  }

  submitQuery() {
    console.log('in submit Query');
    console.log('email : ' + this.email);
    console.log('name : ' + this.name);
    //call mail service 
    // this.router.navigate(['']);
    //     var addMessage = firebase.functions().httpsCallable('addMessage');
    // addMessage({}).then(function(result) {
    //   // Read result of the Cloud Function.
    //   var sanitizedMessage = result.data.text;
    //   console.log("res: " +sanitizedMessage);
    //   // ...
    // });
    // this.req();
    this.mailService.addQuery(this.email,this.name,this.lastname,this.question);
  }

  submitFeedback() {
    console.log('in submit feedback');
    console.log('email : ' + this.email);
    console.log('name : ' + this.name);
    this.mailService.addFeedback(this.email,this.name,this.lastname,this.desc);

  }

  sendEmail() {
    let url = `https://your-cloud-function-url/function`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'user@example.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    // return this.http.post(url, params, headers)
    //                 .toPromise()
    //                 .then( res => {
    //                   console.log(res)
    //                 })
    //                 .catch(err => {
    //                   console.log(err)
    // })
  }

  getOption(event: MatRadioChange) {
    this.showQuery = !this.showQuery;
  }

}
