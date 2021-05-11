import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { PremiumCalculatorService } from '../services/premium-calculator.service';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css']
})
export class PremiumCalculatorComponent implements OnInit {
  private response$: Observable<number>;
  public clientData: Client;
  public showResult: boolean;

  // Retrieve this value from api to avoid client side handling
  public occupations = [
    { name: 'Cleaner', value: 'Light Manual' },
    { name: 'Doctor', value: 'Professional' },
    { name: 'Author', value: 'White Collar' },
    { name: 'Farmer', value: 'Heavy Manual' },
    { name: 'Mechanic', value: 'Heavy Manual' },
    { name: 'Florist', value: 'Manual' }
  ];
  constructor(private premiumCalculatorService: PremiumCalculatorService) { }

  ngOnInit() {
    this.clientData = new Client();
  }

  public calculatePremium() {
    if (this.clientData.age > 0 && this.clientData.deathSumInsured > 0 && this.clientData.occupation !== '') {
      // If all the required parameters are valid then retrieve the calculated premium from API.
      this.response$ = this.premiumCalculatorService.calculatePremium(this.clientData);
      this.showResult = true;
      console.log(this.clientData);
    } else {
      this.showResult = false;
    }
  }
}
