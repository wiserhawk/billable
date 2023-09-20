import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/secure/models/billable.model';
import { AuthService } from 'src/app/secure/services/auth.service';
import { UserService } from 'src/app/secure/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  model: any = {};
  public error: boolean = false;
  public errName: boolean = false;
  public errUsername: boolean = false;
  public errEmail: boolean = false;
  public errPassword: boolean = false;
  public errMain: boolean = false;
  public errMsgName!: string;
  public errMsgUsername!: string;
  public errMsgEmail!: string;
  public errMsgPassword!: string;
  public errMsgMain!: string;

  public constructor(private userService: UserService, public route: Router) {}

  public onSubmit() {
    this.clearErrorState();
    if (this.validateInput(this.model)) {
      this.clearErrorState();
      const user: User = {
        name: this.model.name,
        surname: this.model.surname,
        username: this.model.username,
        email: this.model.email,
        password: this.model.password
      };
      this.userService.saveUser(user).subscribe(
        res => {
          if (res) {
            this.route.navigateByUrl("/login");
          }
        },
        error => {
          this.error = true;
          this.errMain = true;
          this.errMsgMain = 'Failed to create user! Please try after sometime';
          
        }
      );
    }
  }


  private validateInput(model: any): boolean {
    if (!model|| !this.model.name) {
      this.errMsgName = "Name is required field!";
      this.errName = true;
      this.error = true;
    }
    if (!model|| !this.model.username) {
      this.errMsgUsername = "Username is required field!";
      this.errUsername = true;
      this.error = true;
    }
    if (!model|| !this.model.email) {
      this.errMsgEmail = "Email is required field!";
      this.errEmail = true
      this.error = true;
    }
    if (!model|| !this.model.password) {
      this.errMsgPassword = "Password is required field!";
      this.errPassword = true;
      this.error = true;
    }
    if (this.error) {
      return false;
    }
    return true;
  }

  private clearErrorState() {
    this.error = false;
    this.errName = false;
    this.errUsername = false;
    this.errEmail = false;
    this.errPassword = false;
    this.errMain = false;
    this.errMsgName = '';
    this.errMsgUsername = '';
    this.errMsgEmail = '';
    this.errMsgPassword = '';
    this.errMsgMain = '';
  }

}
