import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.scss']
})
export class SignupScreenComponent {
  form: any = {
    role: 1,
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private storageService: StorageService, private _router: Router) { }

  onSubmit(): void {
    const { role, username, email, password } = this.form;
    let roles: Array<string> = [];

    this.authService.register(username, email, password).subscribe({
      next: async data => {
        console.log(data);
        this.storageService.saveUser(data);

        this.isSuccessful = true;
        this.isSignUpFailed = false;
        await this._router.navigateByUrl('/');
        this.reloadPage()
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
