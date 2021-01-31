import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginData } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.form.value);
    this.router.navigate(['main']);
  }

  private createLoginForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
    } as { [K in keyof LoginData]: any }, { updateOn: 'blur' });
  }
}
