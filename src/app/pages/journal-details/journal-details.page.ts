import { Journal, JournalService } from './../../services/journal.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.page.html',
  styleUrls: ['./journal-details.page.scss']
})
export class JournalDetailsPage implements OnInit {
  journal: Journal = {
    title: 'Title your post',
    createdAt: new Date().getTime(),
    content: 'Tell us about it'
  }

  journalId = null

  constructor (
    private route: ActivatedRoute,
    private nav: NavController,
    private journalService: JournalService,
    private loadingController: LoadingController
  ) {}

  ngOnInit () {
    this.journalId = this.route.snapshot.params['id']
    if (this.journalId) {
      this.loadJournal()
    }
  }

  async loadJournal () {
    const loading = await this.loadingController.create({
      message: 'Loading Journal..'
    })
    await loading.present()

    this.journalService.getJournal(this.journalId).subscribe(res => {
      loading.dismiss()
      this.journal = res
    })
  }

  async saveJournal () {
    const loading = await this.loadingController.create({
      message: 'Saving Journal..'
    })
    await loading.present()

    if (this.journalId) {
      this.journalService
        .updateJournal(this.journal, this.journalId)
        .then(() => {
          loading.dismiss()
          this.nav.back()
        })
    } else {
      this.journalService.addJournal(this.journal).then(() => {
        loading.dismiss()
        this.nav.back()
      })
    }
  }

  async removeJournal () {
    const loading = await this.loadingController.create({
      message: 'Deleting Journal..'
    })
    await loading.present()

    if (this.journalId) {
      this.journalService
        .removeJournal(this.journal, this.journalId)
        .then(() => {
          loading.dismiss()
          this.nav.back()
        })
    }
  }
}
