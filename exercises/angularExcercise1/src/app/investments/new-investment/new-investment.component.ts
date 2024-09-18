import { Component, inject, signal } from '@angular/core';
import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.css'
})
export class NewInvestmentComponent {

  investmentService = inject(InvestmentsService);
  
  intialInvestment= signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(0);


  onSubmit(){
    this.investmentService.calculateInvestment({
      initialInvestment:  +this.intialInvestment(),
      annualInvestment : +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });

    this.resetForm();
  }

  resetForm() {
    this.intialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(0);
    this.duration.set(0);
  }

}
