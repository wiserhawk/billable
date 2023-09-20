import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credential } from 'src/app/secure/models/billable.model';
import { AuthService } from 'src/app/secure/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: any = {};
  public error: boolean = false;
  public errorMsg!: string;

  public constructor(private authService: AuthService, public route: Router) {}
  
  ngOnInit(): void {
    localStorage.clear();
  }

  public onSubmit() {
    if (!this.model|| !this.model.username || !this.model.password) {
      this.errorMsg = "username or password is invalid!";
      this.error = true;
      return;
    }
    const cred: Credential = {
      username: this.model.username,
      password: this.model.password
    };
    this.authService.login(cred).subscribe(res => {
      localStorage.setItem("auth_token", res.value)
      this.route.navigateByUrl("/home");
    });

  }


}
