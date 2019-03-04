import { Component, OnInit,Input, Output, EventEmitter, Inject } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { MatDialog } from '@angular/material';
import { ConfermLogoutComponent } from '../dialogs/conferm-logout/conferm-logout.component'



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showlogin:boolean;
  // showHome:boolean;

  constructor(public authService: AuthService,
    public router: Router,
    private dialog: MatDialog,
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
    let dialogRef = this.dialog.open(ConfermLogoutComponent);
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result == 'confirm') {
        console.log('logout');
        this.authService.logout().then(() => {
          // this.clear();
          this.router.navigate(['']);
        })
      }
    })


    
  }

  // home(){
  //   this.showHome = false;    
  //   this.router.navigate(['']);    
  // }

  login(show){
    console.log('login :'+show)
    if(show == 'login')
    {
      this.showlogin = true;
      // this.showHome = true;
    }
    else{
      this.showlogin = false;
    }
  }

  // openLoginDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   this.dialog.open(LoginComponent, dialogConfig);
  // }

}
