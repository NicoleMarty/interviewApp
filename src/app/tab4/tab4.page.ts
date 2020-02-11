import { Component, OnInit } from '@angular/core'
import { Journal, JournalService } from '../services/journal.service'

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
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
