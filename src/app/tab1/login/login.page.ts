import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/auth.service'
import { Tab3Page } from '../../tab3/tab3.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  constructor (
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit () {}

  logIn (email, password) {
    this.authenticationService
      .SignIn(email.value, password.value)
      .then(res => {
        if (this.authenticationService.isEmailVerified) {
          this.router.navigate(['../tabs/tab3'])
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
