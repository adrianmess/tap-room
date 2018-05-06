import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleFocus: string = 'Welcome to the Tap Room';

  currentFocus: string = 'Angular Homework';
   currentTime = new Date();
   month: number = this.currentTime.getMonth() + 1;
   day: number = this.currentTime.getDate();
   year: number = this.currentTime.getFullYear();
   selectedTask = null;

   masterTaskList: Task[] = [
     // new Task('Task 1', '',  '1'),
     // new Task('Task 2', '', '2'),
     // new Task('Task 3', '', '3')
   ];

   editTask(clickedTask){
     this.selectedTask = clickedTask;
   }

   finishedEditing() {
     this.selectedTask = null;
   }

   addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }
  // selectedTask: Task = this.task;
  // selectedTask = null;
}
