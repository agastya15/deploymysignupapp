import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   Username;
   Firstname;
   Lastname;
   dob;
   country;
  constructor() { }
 
  ngOnInit(){
  }
onClickSubmit(data) {
    this.Username = data.Username;
    this.Firstname = data.Firstname;
    this.Lastname = data.Lastname;
    this.dob = data.dob;
    this.country = data.country;
    }
}
