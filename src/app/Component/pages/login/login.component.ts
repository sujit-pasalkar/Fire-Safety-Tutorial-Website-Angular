import {
  Component, OnInit, ViewChild, ElementRef, HostListener,
  Input, Output, EventEmitter
} from '@angular/core';
import { AuthService } from '../../../Services/auth/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OkDialogComponent } from "../../dialogs/ok-dialog/ok-dialog.component";
import { MailService } from "../../../Services/mail/mail.service";
import { Subscription } from 'rxjs';
// declare var $: any;

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
    public dialog: MatDialog,
    public mailService: MailService,
    // public MatDialogRef : MatDialogRef,
  ) {
    this.user = { "id": "", "email": "", "password": "", "confirmPassword": "" };
    this.isLoginEvent.emit(this.authService.islogin);
  }


  ngOnInit() {
  }

  ngDoCheck(): void {
  }

  openDialog(title, content) {
    // let config = new MdDialogConfig().data();
    let dialogRef = this.dialog.open(OkDialogComponent, {
      data: {
        title: title,
        content: content
      },
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
  }

  login(user) {
    this.ProgressSpinner = true;
    console.log('in ligin()')
    this.authService.login(user).then(res => {
      console.log('in login() res')
      if (res.user.uid) {
        console.log('in ligin() res got uid')
        if (!res.user.emailVerified) {
          this.authService.verifyEmail(res.user.email).then(res => {
            this.ProgressSpinner = false;
            this.checkMailMsg = `Your account is already created.To Login please verify your email id by clicking on a verification link sent
            to you on your registered email id.`
            // $("#myModal").modal('show');
            this.openDialog('Message', this.checkMailMsg);
            this.authService.logout();

          })
        }
        else {
          console.log('in ligin()  user is  ')

          this.authService.loginSuccess(res).then(res => {
            this.ProgressSpinner = false;
            this.authService.islogin = true;
            // console.log('user logged' + this.authService.islogin);
            this.isLoginEvent.emit(this.authService.islogin);
            this.router.navigate(['']);
          })
        }
      }
    }, err => {
      this.ProgressSpinner = false;
      this.loginErr = err.message;
      if (this.loginErr != null) {
        // $("#errModal").modal('show');
        this.openDialog('Message', this.loginErr);

      }
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

  toggleDiv() {
    this.loginDiv = !this.loginDiv;
  }

 async CreateAnAcc(user) {
    this.ProgressSpinner = true;
    console.log('in CreateAnAcc()');
    //create users acc
    this.authService.signup(user).then(async res_user => {
      //add this new user to firestore db
      console.log(`sign up complete, now addingn it `);
     await this.mailService.addSignedUser(user.email, user.password).then(res => {
        console.log(`addSigned done: ${res}`);
      }, err => {
        console.log(`Error while addSigned:${err}`);
      });
      //send mail for account activation
     await this.mailService.ActivationMail().pipe().subscribe(
        data => {
          console.log('after send mail data is :' + JSON.stringify(data));
          if (data["type"]) {
            console.log('sent :');
          }
          else {
            console.log('failed :' );
          }
        }
      )

      this.checkMailMsg = `Your account is created.To Login please verify your email id by clicking on a verification link sent
      to you on your registered email id.`
      this.openDialog('Message', this.checkMailMsg);

      this.authService.logout();
      this.ProgressSpinner = false;
    }, err => {
      this.ProgressSpinner = false;
      this.authService.logout();//
      this.loginErr = err.message;
      if (this.loginErr != null) {
        // $("#errModal").modal('show');
        this.openDialog('Message', this.loginErr);
      }
    });
  }

  change() {
    this.authService.islogin = true;
  }

}
