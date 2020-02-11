import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { TabsPageRoutingModule } from './tabs-routing.module'
import { AuthModule } from '../shared-modules/auth.module'

import { TabsPage } from './tabs.page'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    AuthModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
