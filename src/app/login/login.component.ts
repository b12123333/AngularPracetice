import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from "./login.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private LoginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile: ['', [Validators.required,this.mobileValidator]]
    });
  }
  idToken = '';

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

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.idToken = params.get('idToken') || '';
      if (this.idToken) {
        console.log(this.idToken);
        // 直接解開JWT Token
        // this.authService.extractToken(this.idToken).subscribe((res) => {
        //   this.user = res;
        // });
        //
        // // 如果需要在前端驗證Token，可以使用這個Google API
        // this.authService.verifyToken(this.idToken).subscribe({
        //   next: (data) => {
        //     console.log('This is verified by Google', data);
        //   },
        //   error: (error) => {
        //     console.log(error);
        //   },
        // });

        // TODO: 接下來可以將idToken存到localStorage，並且在每次發送API請求時，將idToken放到Authorization Header。後端只要用一樣的方式驗證idToken即可確認身份。
      }
    });
  }
}
