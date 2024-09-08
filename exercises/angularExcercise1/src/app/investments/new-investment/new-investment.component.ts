import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-new-investment',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.css'
})
export class NewInvestmentComponent {

  investmentService = inject(InvestmentsService);
  
  intialInvestment!:string;
  annualInvestment!:number;
  expectedReturn!:number;
  duration!:number;


  onEnterInvestmentData(){
    console.log(this.intialInvestment);
    console.log(this.annualInvestment);

    this.investmentService.calculateInvestment({
      initialInvestment: Number( this.intialInvestment),
      annualInvestment : this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });

    console.log(this.investmentService.getResults())
  }

}
