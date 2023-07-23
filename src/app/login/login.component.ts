import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private LoginService: LoginService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile: ['', [Validators.required,this.mobileValidator]]
    });
  }

  mobileValidator(mobile: FormControl): any {
    let value = (mobile.value || '') + ''; //轉成字串
    var phoneReg = /^09\d{2}-?\d{3}-?\d{3}$/; //台灣手機號碼
    let valid = phoneReg.test(value);

    console.log('phone驗證結果:' + valid);

    return valid ? null: {mobile: valid}
  }


  onSubmit() {
    console.log(this.form.value);
    this.LoginService.loginInfo(this.form.value).subscribe(
      repsonse =>{
        console.log(repsonse)
        console.log('連線成功')
      }
    )
  }

}
