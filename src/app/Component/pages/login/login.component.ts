import { Component, OnInit, ViewChild, ElementRef, HostListener,
  Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
// import { MatDialogRef } from "@angular/material";

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  isLoginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  user: User;
  loginDiv: boolean = true;
  loginErr: string = null;
  checkMailMsg;
  ProgressSpinner: boolean = false;

  constructor(public authService: AuthService,
    public router: Router,
    // public dialogRef: MatDialogRef<LoginComponent>
  ) {

    this.user = { "id": "", "email": "", "password": "", "confirmPassword": "" };

    // this.authService.isloginChange.subscribe(value => { //rm
    //   this.authService.islogin = value;
    //   console.log('*******isloginChangeinlogin'+this.authService.islogin)
    // });

  this.isLoginEvent.emit(this.authService.islogin);
  }


  ngOnInit() {
  }

  // close() {
  //   this.dialogRef.close();
  // }

  ngDoCheck(): void {
  }

  login(user) {
    this.ProgressSpinner = true;
    console.log('in ligin()')

    this.authService.login(user).then(res => {
    console.log('in login() res')
      if (res.user.uid) {
    console.log('in ligin() res got uid')

        // if (!res.user.emailVerified) {
        //   this.authService.verifyEmail(res.user.email).then(res => {
        //     this.ProgressSpinner = false;
        //     this.checkMailMsg = `Your account is already created.To Login please verify your email id by clicking on a verification link sent
        //     to you on your registered email id.`
        //     $("#myModal").modal('show');
        //   })
        // }
        // else {
      // console.log('in ligin()  user is  ')

        this.authService.loginSuccess(res).then(res => {
          this.ProgressSpinner = false;
          this.authService.islogin = true;
          console.log('user logged' + this.authService.islogin);
          
          this.isLoginEvent.emit(this.authService.islogin);

          this.router.navigate(['']);
          // this.authService.toggleIsLogin();
        })
        // }
      }
    }, err => {
      this.ProgressSpinner = false;
      this.loginErr = err.message;
      // if (this.loginErr != null) {
      //   $("#errModal").modal('show');
      // }
    }
    ).catch()
    {
      // alert(e)
    }
  }

  // resetDiv() {
  //   this.loginDiv = !this.loginDiv;
  // }


  // resetPassword(email) {
  //   this.ProgressSpinner = true;
  //   this.authService.resetPassword(email).then(res => {
  //     this.ProgressSpinner = false;
  //     if (res == undefined) {
  //       this.checkMailMsg = `Reset Password link has been sent
  //           to you on your registered email id.`
  //       $("#myModal").modal('show'); //add ng prime toast
  //     }
  //   })
  //     .catch(e => {
  //       this.loginErr = e;
  //       this.ProgressSpinner = false;
  //       if (this.loginErr != null) {
  //         $("#errModal").modal('show'); //add ng prime toast
  //       }
  //     })
  // }

  clearFormFields() {
    this.user.email = "";
    this.user.password = "";
    // this.user.confirmPassword="";
  }

  createAcc() {

  }

  change() {
    this.authService.islogin = true;
  }

}
