import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent  {
  @Output() sendTask = new EventEmitter();
  // constructor() { }

  submitForm(title: string, description: string, priority: any) {
      let newTask: Task = new Task(title, description, parseInt(priority));
      this.sendTask.emit(newTask);
    }
}
