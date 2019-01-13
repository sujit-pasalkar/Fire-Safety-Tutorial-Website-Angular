import { Component, OnInit,Input, Output, EventEmitter, Inject } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showlogin:boolean;

  constructor(public authService: AuthService,
    public router: Router,
  ) {
    // authService.check();
    // this.authService.isloginChange.subscribe(value => {
    //   this.authService.islogin = value;
    //   console.log('*******isloginChangeinSideNAv'+this.authService.islogin)
    // });
  }

  // get islogin():boolean{ //rm
  //   return this.authService.islogin;
  // }

  updateFromChild(val:boolean){
    console.log("updateFromChild()........."+val);
    this.showlogin = false;
    //show logoutbutton
    this.authService.islogin = val;

  }

  ngOnInit() {
  }

  logout($event) {
    this.authService.logout().then(() => {
      // this.clear();
      this.router.navigate(['']);
    })
  }

  login(show){
    console.log('login :'+show)
    if(show == 'login')
    {
      this.showlogin = true;
    }
    else{
      this.showlogin = false;
      // this.router.navigate(['']);
    }
  }

  // openLoginDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   this.dialog.open(LoginComponent, dialogConfig);
  // }

}
