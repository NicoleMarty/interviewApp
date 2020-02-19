import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Supply {
  id?: string
  title: string
  content: string
  createdAt: number
}

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private suppliesCollection: AngularFirestoreCollection<Supply>

  private supplies: Observable<Supply[]>

  constructor (db: AngularFirestore) {
    this.suppliesCollection = db.collection<Supply>('supplies')

    this.supplies = this.suppliesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    )
  }

  getSupplies () {
    return this.supplies
  }

  getSupply (id) {
    return this.suppliesCollection.doc<Supply>(id).valueChanges()
  }

  updateSupply (supply: Supply, id: string) {
    return this.suppliesCollection.doc(id).update(supply)
  }

  addSupply (supply: Supply) {
    return this.suppliesCollection.add(supply)
  }

  removeSupply (supply: Supply, id: string) {
    return this.suppliesCollection.doc(id).delete()
  }
}
