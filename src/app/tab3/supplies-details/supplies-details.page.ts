import { Supply, SupplyService } from '../../services/supplies.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-supplies-details',
  templateUrl: './supplies-details.page.html',
  styleUrls: ['./supplies-details.page.scss']
})
export class SupplyDetailsPage implements OnInit {
  supply: Supply = {
    title: '',
    createdAt: new Date().getTime(),
    content: ''
  }

  supplyId = null

  constructor (
    private route: ActivatedRoute,
    private nav: NavController,
    private supplyService: SupplyService,
    private loadingController: LoadingController
  ) {}

  ngOnInit () {
    this.supplyId = this.route.snapshot.params['id']
    if (this.supplyId) {
      this.loadSupply()
    }
  }

  async loadSupply () {
    const loading = await this.loadingController.create({
      message: 'Loading Supplies..'
    })
    await loading.present()

    this.supplyService.getSupply(this.supplyId).subscribe(res => {
      loading.dismiss()
      this.supply = res
    })
  }

  async saveSupply () {
    const loading = await this.loadingController.create({
      message: 'Saving Supplies..'
    })
    await loading.present()

    if (this.supplyId) {
      this.supplyService.updateSupply(this.supply, this.supplyId).then(() => {
        loading.dismiss()
        this.nav.back()
      })
    } else {
      this.supplyService.addSupply(this.supply).then(() => {
        loading.dismiss()
        this.nav.back()
      })
    }
  }

  async removeSupply () {
    const loading = await this.loadingController.create({
      message: 'Deleting Supplies..'
    })
    await loading.present()

    if (this.supplyId) {
      this.supplyService.removeSupply(this.supply, this.supplyId).then(() => {
        loading.dismiss()
        this.nav.back()
      })
    }
  }
}
