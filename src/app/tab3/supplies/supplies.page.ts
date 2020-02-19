import { Component, OnInit } from '@angular/core'
import { Supply, SupplyService } from '../../services/supplies.service'

@Component({
  selector: 'app-supplies',
  templateUrl: 'supplies.page.html',
  styleUrls: ['supplies.page.scss']
})
export class SupplyPage implements OnInit {
  supplies: Supply[]

  constructor (private supplyService: SupplyService) {}

  ngOnInit () {
    this.supplyService.getSupplies().subscribe(res => {
      this.supplies = res
    })
  }

  remove (supply, id) {
    this.supplyService.removeSupply(supply.id, id)
  }
}
