import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
// http://localhost:60165/api/PremiumCalculator/test
@Injectable({
  providedIn: 'root'
})
export class PremiumCalculatorService {
  private url = 'http://localhost:60165/api/PremiumCalculator';
  constructor(private httpClient: HttpClient) { }

  public calculatePremium(clientData: Client): Observable<number> {
    return this.httpClient.post<number>(this.url + '/calculate', clientData);
  }
}
