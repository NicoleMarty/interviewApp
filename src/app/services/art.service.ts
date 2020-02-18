import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from '@angular/fire/firestore'
import { map, take } from 'rxjs/operators'
import { Observable } from 'rxjs'

export interface Art {
  id?: string
  name: string
  notes: string
}

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  public arts: Observable<Art[]>
  private artCollection: AngularFirestoreCollection<Art>

  constructor (private afs: AngularFirestore) {
    this.artCollection = this.afs.collection<Art>('arts')
    this.arts = this.artCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    )
  }

  getArts (): Observable<Art[]> {
    return this.arts
  }

  getArt (id: string): Observable<Art> {
    return this.artCollection
      .doc<Art>(id)
      .valueChanges()
      .pipe(
        take(1),
        map(art => {
          art.id = id
          return art
        })
      )
  }

  addArt (art: Art): Promise<DocumentReference> {
    return this.artCollection.add(art)
  }

  updateArt (art: Art): Promise<void> {
    return this.artCollection
      .doc(art.id)
      .update({ name: art.name, notes: art.notes })
  }

  deleteArt (id: string): Promise<void> {
    return this.artCollection.doc(id).delete()
  }
}
