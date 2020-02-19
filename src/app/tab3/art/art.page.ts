import { Component } from '@angular/core'
import { PhotoService } from '../../services/photo.service'
import { ArtService } from '../../services/art.service'
import { ActionSheetController } from '@ionic/angular'

import {
  Plugins,
  CameraResultType,
  Capacitor,
  FilesystemDirectory,
  CameraPhoto,
  CameraSource
} from '@capacitor/core'

const { Camera, Filesystem, Storage } = Plugins

@Component({
  selector: 'app-art',
  templateUrl: 'art.page.html',
  styleUrls: ['art.page.scss']
})
export class ArtPage {
  constructor (
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) {}
  ngOnInit () {
    this.photoService.loadSaved()
  }
  public async showActionSheet (photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Add Note',
          icon: 'add',
          handler: () => {
            this.photoService.addNote()
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position)
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          }
        }
      ]
    })
    await actionSheet.present()
  }
}
