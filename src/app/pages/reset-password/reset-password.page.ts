import { Component, OnInit, ViewChild } from '@angular/core'
import { UserCredential } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss']
})
export class ResetPasswordPage implements OnInit {
  @ViewChild(AuthFormComponent, { static: false })
  resetPasswordForm: AuthFormComponent

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit () {}

  async resetPassword (credentials: UserCredential): Promise<void> {
    try {
      await this.authService.resetPassword(credentials.email)
      await this.resetPasswordForm.hideLoading()
    } catch (error) {
      await this.resetPasswordForm.hideLoading()
      this.resetPasswordForm.handleError(error)
    }
  }
}
