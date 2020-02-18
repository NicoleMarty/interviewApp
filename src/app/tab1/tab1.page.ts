import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../services/auth.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit {
  constructor (public authenticationService: AuthenticationService) {}

  ngOnInit () {}
}
