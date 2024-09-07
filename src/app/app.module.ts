import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";

// this is required to run with module-based angular app
// provide some helpful directives, pipes and other features that ur application use.

@NgModule({
declarations: [
    // to add the component here, you have to not make it a standalone one.
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
],
imports:[
    // is required to the application to run with module approach.
    BrowserModule,
    FormsModule
    // you have to import all other component that being used inside in the main module
    // setting them in imports, let you keep them as a standalone components, for other non-standalone components put it in 'declarations'.
    ],

    // this required to define your start-point component
    bootstrap: [AppComponent]

})
export class AppModule{


}