import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore:Firestore) { }
  addPerson(person:any){
    const personRef = collection(this.firestore,'person');
    return addDoc(personRef, person)
  }
}
