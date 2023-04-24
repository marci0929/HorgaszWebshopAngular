import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  collectionName = "Feedback";

  constructor(private firestore: AngularFirestore) { }

  create(feedback: Feedback) {
    return this.firestore.collection<Feedback>(this.collectionName).doc(feedback.name).set(feedback);
  }

  getAll() {
    return this.firestore.collection<Feedback>(this.collectionName).valueChanges();
  }

  getFeedbackByName(name: string){
    return this.firestore.collection<Feedback>(this.collectionName,  ref => ref.where('name', '==', name)).valueChanges();
  }

  getTop10Feedback(){
    return this.firestore.collection<Feedback>(this.collectionName,  ref => ref.orderBy('menoseg', 'desc').limit(10)).valueChanges();
  }

  getById(id: string) {
    return this.firestore.collection<Feedback>(this.collectionName).doc(id).valueChanges();
  }

  update(feedback: Feedback) {
    return this.firestore.collection<Feedback>(this.collectionName).doc(feedback.name).set(feedback);
  }

  delete(id: string) {
    return this.firestore.collection<Feedback>(this.collectionName).doc(id).delete();
  }
}
