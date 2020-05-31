import { Component, OnInit } from '@angular/core';

import {Produit} from '../shared/produit';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from './produit.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Observable<Produit[]>;
  produitForm: FormGroup;
  operation: String = 'add' ;
  selectedProduit: Produit;
  constructor(private produitService: ProduitService, private fb: FormBuilder, private router: ActivatedRoute) {
    this.createForm(); }

  ngOnInit() {
    this.loadProduits();
   this.produits = this.router.snapshot.data.produits;
  }
     loadProduits() {
    this.produitService.getProduits().subscribe(data => {
        this.produits = data;
      },
      error => console.log(error), () => console.log('data validated'));
}
  addProduit() {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {this.loadProduits();
        this.onInitProduit(); });
  }
  updateproduit() {
    const p = this.produitForm.value;
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => { this.loadProduits();
              this.onInitProduit();
      });
  }
  deleteProduit() {
    this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(res => { this.loadProduits();
      this.onInitProduit();
    });
  }
  onInitProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
  }
  createForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    } );
  }
}
