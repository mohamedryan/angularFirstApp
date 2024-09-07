import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    exports:[
        // export only the one will be used in other modules
        TasksComponent,
    ],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule{

}