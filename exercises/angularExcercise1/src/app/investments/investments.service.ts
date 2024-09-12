import { computed, Injectable, signal, Signal } from "@angular/core";
import type { InvestmentCalcualtionResulModel, UserInvestmentInputModel } from "./user-investments.model";


@Injectable({providedIn: 'root'})
export class InvestmentsService {

    private investmentsResult = signal<InvestmentCalcualtionResulModel[]>([]);
    
    calculateInvestment(data: UserInvestmentInputModel): void{
        this.investmentsResult.set([]);
        let investmentValue = data.initialInvestment;
        
        for (let i = 0; i < data.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
            investmentValue += interestEarnedInYear + data.annualInvestment;
            const totalInterest = investmentValue - data.annualInvestment * year - data.annualInvestment;

            this.investmentsResult.update(arr =>  [...arr, {
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: data.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: data.initialInvestment + data.annualInvestment * year
            }]);
        }
    }

    getResults = computed(() => this.investmentsResult())

    
}