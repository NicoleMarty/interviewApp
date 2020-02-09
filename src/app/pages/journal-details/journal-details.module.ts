import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalDetailsPageRoutingModule } from './journal-details-routing.module';

import { JournalDetailsPage } from './journal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalDetailsPageRoutingModule
  ],
  declarations: [JournalDetailsPage]
})
export class JournalDetailsPageModule {}
