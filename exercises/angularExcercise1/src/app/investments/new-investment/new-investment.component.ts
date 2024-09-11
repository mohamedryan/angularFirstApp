import { Component, inject } from '@angular/core';
import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.css'
})
export class NewInvestmentComponent {

  investmentService = inject(InvestmentsService);
  
  intialInvestment!:number;
  annualInvestment!:number;
  expectedReturn!:number;
  duration!:number;


  onEnterInvestmentData(){

    this.investmentService.calculateInvestment({
      initialInvestment:  this.intialInvestment,
      annualInvestment : this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });

  }

}
