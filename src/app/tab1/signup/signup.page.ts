import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.css']
})
export class SignupPage implements OnInit {
  constructor (
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit () {}

  signUp (email: string, password: string) {
    this.authenticationService
      .RegisterUser(email, password)
      .then(res => {
        this.authenticationService.SendVerificationMail()
        this.router.navigate(['verify-email'])
      })
      .catch(error => {
        window.alert(error.message)
      })
  }
}
