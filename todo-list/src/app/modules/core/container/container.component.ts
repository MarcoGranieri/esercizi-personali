import { Itodo } from './../../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  tasks :Itodo[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(task:Itodo) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

}
