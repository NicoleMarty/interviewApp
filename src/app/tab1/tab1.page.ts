import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../shared/auth.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit {
  constructor (public authService: AuthenticationService) {}

  ngOnInit () {}
}
