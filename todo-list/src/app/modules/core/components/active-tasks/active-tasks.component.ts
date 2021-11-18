import { Itodo } from './../../../models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss']
})
export class ActiveTasksComponent implements OnInit {

  @Input() tasks?:Itodo[];

  @Output() delete = new EventEmitter<Itodo>();
  inputTasks:string ="";


  constructor() { }

  ngOnInit(): void {
  }

  addTask () {
    this.tasks?.push({
      title: this.inputTasks,
      completed: false
    });

    this.inputTasks = "";
  }

  remove(task:Itodo) {
    this.delete.emit(task);
  }

  toggleDone (id:number) {
    this.tasks?.map((task, i) => {
      if (i == id) task.completed = !task.completed;

      return task;
    })
  }
}
