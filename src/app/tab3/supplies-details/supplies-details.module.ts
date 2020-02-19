import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { SupplyDetailsPageRoutingModule } from '../supplies-details/supplies-details-routing.module'
import { SupplyDetailsPage } from '../supplies-details/supplies-details.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplyDetailsPageRoutingModule
  ],
  declarations: [SupplyDetailsPage]
})
export class SupplyDetailsPageModule {}
