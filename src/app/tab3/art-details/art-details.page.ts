import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ArtService, Art } from '../../services/art.service'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.page.html',
  styleUrls: ['./art-details.page.scss']
})
export class ArtDetailsPage implements OnInit {
  art: Art = {
    name: '',
    notes: ''
  }

  constructor (
    private activatedRoute: ActivatedRoute,
    private artService: ArtService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit () {}

  ionViewWillEnter () {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.artService.getArt(id).subscribe(art => {
        this.art = art
      })
    }
  }

  addArt () {
    this.artService.addArt(this.art).then(
      () => {
        this.router.navigateByUrl('/')
        this.showToast('Art added')
      },
      err => {
        this.showToast('There was a problem adding your art :(')
      }
    )
  }

  deleteArt () {
    this.artService.deleteArt(this.art.id).then(
      () => {
        this.router.navigateByUrl('/')
        this.showToast('Art detail deleted')
      },
      err => {
        this.showToast('There was a problem deleting your art detail :(')
      }
    )
  }

  updateArt () {
    this.artService.updateArt(this.art).then(
      () => {
        this.showToast('Art detail updated')
      },
      err => {
        this.showToast('There was a problem updating your art detail :(')
      }
    )
  }

  showToast (msg) {
    this.toastCtrl
      .create({
        message: msg,
        duration: 2000
      })
      .then(toast => toast.present())
  }
}
