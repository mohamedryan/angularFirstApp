import { Component } from '@angular/core';
import { NewInvestmentComponent } from './new-investment/new-investment.component';
import { InvestmentsService } from './investments.service';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [NewInvestmentComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent {

  constructor(private investmentsService:InvestmentsService){

  }

  investmentsResult = this.investmentsService.getResults();
}
