import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  onClick(){
    this.http.get('./api/v1/search').subscribe(res=>
      console.log("res"));
  }


}
