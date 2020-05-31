import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URlS} from '../config/api.url.config';
import {Observable, throwError} from 'rxjs';
import {Produit} from '../shared/produit';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  constructor(private http: HttpClient) {
  }
  getProduits(): Observable<any> {
   return this.http.get(API_URlS.PRODUIT_URLS);
  }
  addProduit(produit: Produit): Observable<any> {
    return this.http.post(API_URlS.PRODUIT_URLS, produit);
  }
   updateProduit(produit: Produit): Observable<any> {
     return this.http.put(API_URlS.PRODUIT_URLS , produit);
}
 deleteProduit(ref: String): Observable<any> {
    return this.http.delete(API_URlS.PRODUIT_URLS + '/' + ref);
 }



}
