import { Injectable } from '@angular/core';
// import * as firebase from "firebase";
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  //#firestore variables
  //1.query
  queryCollection: AngularFirestoreCollection<any>;
  queryCollectionitems: Observable<any[]>;

  //1.feedback
  feedbackCollection: AngularFirestoreCollection<any>;
  feedbackCollectionitems: Observable<any[]>;

  //1.query
  signedUsersCollection: AngularFirestoreCollection<any>;
  signedUsersCollectionitems: Observable<any[]>;

  constructor(private afs: AngularFirestore,
    public router: Router, private http: HttpClient, ) {
    this.queryCollection = this.afs.collection('Queries');
    this.feedbackCollection = this.afs.collection('Feedbacks');
    this.signedUsersCollection = this.afs.collection('SignedUsers');
    this.queryCollectionitems = this.queryCollection.valueChanges();
    this.feedbackCollectionitems = this.queryCollection.valueChanges();
    this.signedUsersCollectionitems = this.queryCollection.valueChanges();
  }

  async addQuery(email, nm, lnm, q) {
    console.log("adding query to fb");
    this.queryCollection.doc(email).set({
      time: firebase.firestore.FieldValue.serverTimestamp(),
      name: nm,
      lastname: lnm,
      query: q
    }).then(() => {
      console.log("added query to fb");
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     // 'Authorization': 'secret-key'
      //   })
      // };
      // let data = { name: 'Dale Nguyen' };

      // this.http.post('https://us-central1-exbuzz-a4ab6.cloudfunctions.net/firestoreEmail', data, httpOptions)
      //   .subscribe(
      //     res => {
      //       console.log(res);
      //     },
      //     err => {
      //       console.log("Error occured");
      //     }
      //   )

    });
  }

  async addFeedback(email, nm, lnm, f) {
    console.log("adding feedback to fb");
    this.feedbackCollection.doc(email).set({
      time: firebase.firestore.FieldValue.serverTimestamp(),
      name: nm,
      lastname: lnm,
      feedback: f
    }).then(() => {
      console.log("added feedback to fb");
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     // 'Authorization': 'secret-key'
      //   })
      // };
      // let data = { name: 'Dale Nguyen' };

      // this.http.post('https://us-central1-exbuzz-a4ab6.cloudfunctions.net/firestoreEmail', data, httpOptions)
      //   .subscribe(
      //     res => {
      //       console.log(res);
      //     },
      //     err => {
      //       console.log("Error occured");
      //     }
      //   )

    });
  }

  async addSignedUser(mail, pass) {
    try {
      console.log(`adding signeduser to fb ${mail}  and ${pass}`);
     return await this.signedUsersCollection.doc(mail).set({
        time: firebase.firestore.FieldValue.serverTimestamp(),
        email: mail,
        password: pass,
      });
      // .then((res) => {
      //   console.log("new signed user added in firestore");
      //   return 'added';
      // });
    } catch (e) {
      console.log(`throwing error while addSigned : ${e}`);
      throw new Error(e);
    }
  }

  ActivationMail() {
    console.log('in ActivationMail')
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };

    const data = { //
      subject: 'A new Student just Signed Up ',
      text: 'A new Student just Signed Up check your Account ',
    }
    // console.log('in')

    return this.http.post('http://54.200.143.85:4200/sendmail', data)//httpOptions users/mailsending
    // .pipe(
    // console.log('');
    // catchError(this.handleError('addHero', hero))
    // );
    // .subscribe((data) => {
    //   console.log("mail sent:-------------")
    // });
  }

}

// //
// req() {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       // 'Authorization': 'secret-key'
//     })
//   };
//   let data = { name: 'Dale Nguyen' };

//   this.http.post('https://us-central1-exbuzz-a4ab6.cloudfunctions.net/emailjs', data, httpOptions)
//     .subscribe(
//       res => {
//         console.log(res);
//       },
//       err => {
//         console.log("Error occured");
//       }
//     )

// }
