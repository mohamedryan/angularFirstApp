import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations:[
        CardComponent
    ],
    // to make other module useing this 'ShardModule' able to access the internal components, we need to add those components here
    exports: [
        CardComponent
    ]
})
export class SharedModule{

}