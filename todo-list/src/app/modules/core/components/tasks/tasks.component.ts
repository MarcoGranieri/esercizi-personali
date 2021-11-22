import { Itodo } from './../../../models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() tasks?:Itodo[];
  @Input() type! : "all" | "active" | "completed";
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

