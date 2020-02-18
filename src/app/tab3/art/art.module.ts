import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { ArtPage } from './art.page'
import { ArtPageRoutingModule } from './art-routing.module'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ArtPageRoutingModule],
  declarations: [ArtPage]
})
export class ArtPageModule {}
