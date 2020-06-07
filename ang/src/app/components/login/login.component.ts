import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(e){
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector('#nm').value;
    const password = target.querySelector('#password').value;
    //console.log(name);
    //console.log(password);
    if(name === password){
      window.location.href="task";
    }
  }

}
