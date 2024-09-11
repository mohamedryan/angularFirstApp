import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";

import { InvestmentsComponent } from "./investments.component";
import { NewInvestmentComponent } from "./new-investment/new-investment.component";


@NgModule({
    declarations: [InvestmentsComponent, NewInvestmentComponent],
    imports: [FormsModule, CurrencyPipe],
    exports: [InvestmentsComponent]
})
export class InvestmentsModule{

}