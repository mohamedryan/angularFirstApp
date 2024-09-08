

export class UserInvestmentInputModel {
    initialInvestment!: number;
    annualInvestment!: number;
    expectedReturn!: number;
    duration!: number;
}


export class InvestmentCalcualtionResulModel {
    year!: number;
    interest!: number;
    valueEndOfYear!: number;
    annualInvestment!: number;
    totalInterest!: number;
    totalAmountInvested!: number;
}