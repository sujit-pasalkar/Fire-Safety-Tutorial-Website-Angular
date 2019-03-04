import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.scss']
})
export class OkDialogComponent implements OnInit {

  title:string;
  content:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log("data:"+JSON.stringify(data));
  }

  ngOnInit() {
  }

}
