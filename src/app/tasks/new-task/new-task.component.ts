import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;
  
  // you can use signal here -> enteredTitle = signal('')
  // and angular with ngModule will detect it is a signal and will read and write to it properly.
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // another way to use injected service.
  private tasksService = inject(TasksService);


  onClose() {
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
  }
}
