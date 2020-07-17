import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Input('rating') rating: number;   @Input('starCount') starCount: number;   @Input('color') color: string;
  q1stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
  q1starCount=0;
  q2stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
  q2starCount=0;
  q3stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
  q3starCount=0;
  q4stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
  q4starCount=0;
  name:string;
  email:string;
  tele:string;
  feedback:string;
  indexCompleted=false;
  API_SERVER="https://api.vitaz.dev/";
  loading = false;
  @ViewChild('stepper') stepper: MatStepper;
  constructor(private httpClient: HttpClient,private _snackBar: MatSnackBar) { }

  submitFeedback(){
    this.loading=true;
    let body = {"userName":this.name,"email":this.email,"telephone":this.tele,"q1":this.q1starCount,"q2":this.q2starCount,"q3":this.q3starCount,"q4":this.q4starCount,"feedback":this.feedback}
    this.httpClient.post(this.API_SERVER + 'feedbacks', body).subscribe(
      res => {
        console.log(res);
        this.q1stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
        this.q1starCount=0;
        this.q2stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
        this.q2starCount=0;
        this.q3stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
        this.q3starCount=0;
        this.q4stars=["star_outline","star_outline","star_outline","star_outline","star_outline"]
        this.name=' ';
        this.email=' ';
        this.tele='';
        this.feedback='';
        this.loading = false;
        this.stepper.selectedIndex = 0;

        this._snackBar.open("Feedback saved successfully!", "", {
          duration: 3500,
        });
        // this.name='';
        // this.email='';
        }
      );
  }

  setStars1(pos){
    this.q1starCount=pos;
    this.q1stars=[]
    for ( let i=0; i<5;i++){
      if (i<pos){
        this.q1stars.push("star");
      }
      else{
        this.q1stars.push("star_outline");
      }
    }
  }
  setStars2(pos){
    this.q2starCount=pos;
    this.q2stars=[]
    for ( let i=0; i<5;i++){
      if (i<pos){
        this.q2stars.push("star");
      }
      else{
        this.q2stars.push("star_outline");
      }
    }
  }
  setStars3(pos){
    this.q3starCount=pos;
    this.q3stars=[]
    for ( let i=0; i<5;i++){
      if (i<pos){
        this.q3stars.push("star");
      }
      else{
        this.q3stars.push("star_outline");
      }
    }
  }
  setStars4(pos){
    this.q4starCount=pos;
    this.q4stars=[]
    for ( let i=0; i<5;i++){
      if (i<pos){
        this.q4stars.push("star");
      }
      else{
        this.q4stars.push("star_outline");
      }
    }
  }

  ngOnInit(): void {
  }

}
