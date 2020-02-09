import { Component, OnInit } from '@angular/core'
import { Journal, JournalService } from '../services/journal.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  journals: Journal[]

  constructor (private journalService: JournalService) {}

  ngOnInit () {
    this.journalService.getJournals().subscribe(res => {
      this.journals = res
    })
  }

  remove (item) {
    this.journalService.removeJournal(item.id)
  }
}
