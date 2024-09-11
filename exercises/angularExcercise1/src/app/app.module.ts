import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentsModule } from "./investments/investments.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, InvestmentsModule],
    bootstrap: [AppComponent]
})
export class AppModule{

}