import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Journal {
  id?: string
  title: string
  content: string
  createdAt: number
}

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private journalsCollection: AngularFirestoreCollection<Journal>

  private journals: Observable<Journal[]>

  constructor (db: AngularFirestore) {
    this.journalsCollection = db.collection<Journal>('journals')

    this.journals = this.journalsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    )
  }

  getJournals () {
    return this.journals
  }

  getJournal (id) {
    return this.journalsCollection.doc<Journal>(id).valueChanges()
  }

  updateJournal (journal: Journal, id: string) {
    return this.journalsCollection.doc(id).update(journal)
  }

  addJournal (journal: Journal) {
    return this.journalsCollection.add(journal)
  }

  removeJournal (journal: Journal, id: string) {
    return this.journalsCollection.doc(id).delete()
  }
}
