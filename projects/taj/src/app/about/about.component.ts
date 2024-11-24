import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  email: string = "admin@gmail.com";
  password: string = "Admin";
  company: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.email === "admin@gmail.com" && this.password === "Admin"){
      alert("Login successfull!");
    } else {
      alert("Invalid credentials!");
    }
  }

}
