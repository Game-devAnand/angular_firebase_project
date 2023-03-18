import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interface/product';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs: Firestore) { }


  sendData(product:Product){
    product.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Products'), product)
  }

  getProduct(): Observable<Product[]> {
    let productsRef = collection(this.fs, 'Products')
    return collectionData(productsRef, { idField: 'doc_id' }) as Observable<Product[]>
  }

  async getProductById(id: any): Promise<any> {

    let docRef = doc(this.fs, 'Products', id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("Document does not exist")
      }
    } catch (error) {
      console.log(error)
    }
  }



}
