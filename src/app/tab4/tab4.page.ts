import { Component, OnInit, ViewChild } from '@angular/core'
import { UserCredential } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page implements OnInit {
  @ViewChild(AuthFormComponent, { static: false }) loginForm: AuthFormComponent

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit () {}

  async loginUser (credentials: UserCredential): Promise<void> {
    try {
      const UserCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      )
      this.authService.userId = UserCredential.user.uid
      await this.loginForm.hideLoading()
      this.router.navigateByUrl('tab1')
    } catch (error) {
      await this.loginForm.hideLoading()
      this.loginForm.handleError(error)
    }
  }
}
