

export interface UserInvestmentInputModel {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}


export interface InvestmentCalcualtionResulModel {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}