import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag: boolean = true;

  updateFlag(arg: boolean) {
    this.flag = arg;
  }
}
