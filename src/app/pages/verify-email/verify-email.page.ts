import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../../services/auth.service'
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss']
})
export class VerifyEmailPage implements OnInit {
  constructor (public authenticationService: AuthenticationService) {}

  ngOnInit () {}
}
