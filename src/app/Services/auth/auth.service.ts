import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as firebase from "firebase";
// import { Observable } from " '@angular/core';
// import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User;
  // user1: Observable<firebase.User>;
  
  islogin: boolean ;
  // isloginChange: Subject<boolean> = new Subject<boolean>();
  currentUser: any; //user info
  userState;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private cookieService: CookieService,

  ) { 
  //   this.isloginChange.subscribe((value) => {
  //     this.islogin = value;
  // });
  }

//   toggleIsLogin() {
//     this.isloginChange.next(this.islogin);
//     console.log('called toggleIsLogin:' +this.islogin);
// }

  // async check() {
  // }

  async signup(user) {
    if (user.password === user.confirmPassword) {
      try {
        return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      } catch (e) {
        throw new Error(e);
      }
    }
    else {
      throw new Error('Password Not Matched');
    }
  }

  async verifyEmail(email) {
    this.afAuth.auth.currentUser.sendEmailVerification();
  }

  async login(user) {
    try {
    console.log('in auth ligin()')
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    } catch (e) {
    console.log('in auth ligin() err'+e)
      throw new Error(e);
    }
  }

  async loginSuccess(res) {
    console.log('in auth liginsucc()')
    if (res.user.uid) {
      this.islogin = true;
      console.log('islogin TRUE in auth succ')
      //#cookies
      // let expiredDate = new Date(); //0.00138889 = 2min
      if (this.cookieService.check('exbzFnS')) {
        this.cookieService.set('currentUser', JSON.stringify(res), 1);
        this.currentUser = JSON.parse(this.cookieService.get('currentUser'));
        if (res.user.email == "sujitpasalkar888@gmail.com") { //Admin
          this.cookieService.set('userState', "admin", 1);
        }
        else {
          this.cookieService.set('userState', "user", 1);
          // #product_brought _2nd time 
          // this.firestoreService.subscribeSignedUser(this.currentUser.user.email).then(res => {
          //   console.log("Async await fails..in login auth")
          // });
        }
        this.userState = this.cookieService.get('userState');
        //#
        // this.checkPersonalDetails(this.currentUser);
      }
      else {
        //#localeStorage or sessionStorage
        if (window.sessionStorage) {
          sessionStorage.setItem('currentUser', JSON.stringify(res));
          this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        }
        if (res.user.email == "sujitpasalkar888@gmail.com") { //Admin
          sessionStorage.setItem('userState', "admin");
        }
        else {
          sessionStorage.setItem('userState', "user");
          // #product_brought
          // this.firestoreService.subscribeSignedUser(this.currentUser.user.email).then(res => {
          //   console.log("Async await fails..in login auth")
          // });
        }
        this.userState = sessionStorage.getItem('userState');
        // this.checkPersonalDetails(this.currentUser );
      }
      //
      // this.toggleIsLogin();
    }
  }

 async logout() {
    this.afAuth.auth.signOut();
    this.islogin = false;
    this.cookieService.deleteAll();
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userState');
    this.router.navigate(['']);
    // this.toggleIsLogin();
  }

  sendMail(){
    
  }
}
