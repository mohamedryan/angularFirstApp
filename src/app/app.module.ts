import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

// this is required to run with module-based angular app
// provide some helpful directives, pipes and other features that ur application use.

@NgModule({
declarations: [
    // you have to import all other component that being used inside in the main module in case of thery ar a module-based components
    AppComponent,
    HeaderComponent,
    UserComponent,
    
],
imports:[
    // 'BrowserModule' is required to the application to run with module approach.
    BrowserModule,
    
    SharedModule,
    TasksModule

    // you have to import all other component that being used inside in the main module in case of thery ar a standalone components
    ],

    // this required to define your start-point component
    bootstrap: [AppComponent]

})
export class AppModule{


}