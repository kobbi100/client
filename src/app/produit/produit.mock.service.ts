


import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';
@Injectable()
export class ProduitMockService {
  private produits: Produit[] = [];
  constructor() {
    const p1: Produit = new Produit('kkk', 12, 12);
    const p2: Produit = new Produit('ssss', 120, 120);
    const p3: Produit = new Produit('sddddd', 22, 22);
     this.produits.push(p1);
     this.produits.push(p2);
      this.produits.push(p3);
  }
  getProduits() {return this.produits;
  }
}
