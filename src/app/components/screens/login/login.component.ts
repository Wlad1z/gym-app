import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ChangeService } from 'src/app/services/change/change.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  haveAcc: boolean = true;

  updateHaveAcc(newValue: boolean) {
    this.haveAcc = newValue;
  }
}
