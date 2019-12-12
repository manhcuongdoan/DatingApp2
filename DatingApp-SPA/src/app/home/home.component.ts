import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  /**
   * handle when click register
   */
  registerToggle() {
    this.registerMode = true;
  }

  /**
   * handle when click cancel
   */
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (response) => {
        this.values = response;
        console.log(this.values);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
