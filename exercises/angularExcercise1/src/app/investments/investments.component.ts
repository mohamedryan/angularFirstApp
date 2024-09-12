import { Component, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NewInvestmentComponent } from './new-investment/new-investment.component';
import { InvestmentsService } from './investments.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent {

  constructor(private investmentsService:InvestmentsService){

  }

  investmentsResult = this.investmentsService.getResults

  // get investmentsResult(){
  //  return this.investmentsService.getResults();
  // }
}
