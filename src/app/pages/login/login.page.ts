import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/shared/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor (
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit () {}

  logIn (email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then(res => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['tab4'])
        } else {
          window.alert('Email is not verified')
          return false
        }
      })
      .catch(error => {
        window.alert(error.message)
      })
  }
}
