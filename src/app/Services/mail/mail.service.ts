import { Injectable } from '@angular/core';
// import * as firebase from "firebase";
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  //#firestore variables
  queryCollection: AngularFirestoreCollection<any>;
  queryCollectionitems: Observable<any[]>;

  constructor(private afs: AngularFirestore,
    public router: Router, private http: HttpClient,) {
    this.queryCollection = this.afs.collection('Queries');
    this.queryCollectionitems = this.queryCollection.valueChanges();

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
    this.queryCollection.doc(email).set({
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
