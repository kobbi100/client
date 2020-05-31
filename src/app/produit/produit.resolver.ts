import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProduitService} from './produit.service';

@Injectable()
export class Resolver implements Resolve<any> {
constructor(private produitService: ProduitService) {}
resolve() {
  return this.produitService.getProduits();
}
}
