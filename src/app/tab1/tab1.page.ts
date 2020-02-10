import { Component, OnInit } from '@angular/core'
import { Journal, JournalService } from '../services/journal.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  journals: Journal[]

  constructor (private journalService: JournalService) {}

  ngOnInit () {
    this.journalService.getJournals().subscribe(res => {
      this.journals = res
    })
  }

  remove (journal, id) {
    this.journalService.removeJournal(journal.id, id)
  }
}
