import { Component ,OnInit,HostListener} from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainingModule';

  constructor(public authService: AuthService,
    private _router: Router,
    private cookieService: CookieService
  ) {

    // try {
    //   //#Get cookies
    //   this.authService.currentUser = JSON.parse(this.cookieService.get('currentUser')); //err if no cookie
    //   if (this.authService.currentUser.user.email) { //throws err if no coockies
    //     this.authService.islogin = true;
    //     this.authService.userState = this.cookieService.get('userState');
    //     console.log(this.authService.userState)
    //   }
    //   // }
    // } catch (error) {
    //   console.log("in catch")      ;
    //   //#get() sessionStorage or localStorage
    //   this.authService.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    //   if (this.authService.currentUser) { //!null
    //     if (this.authService.currentUser.user.email) {
    //       this.authService.islogin = true;
    //       this.authService.userState = sessionStorage.getItem('userState');
    //     console.log("....."+this.authService.userState)
    //     }
    //   }
    //   else{
    //   console.log("session:"+JSON.parse(sessionStorage.getItem('currentUser')))   
    //   }
    // }

  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
   }
   
   @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
   }
   
   @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
   }

}
