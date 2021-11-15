import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './modules/core/container/container.component';
import { AllTasksComponent } from './modules/core/components/all-tasks/all-tasks.component';
import { ActiveTasksComponent } from './modules/core/components/active-tasks/active-tasks.component';
import { CompletedTasksComponent } from './modules/core/components/completed-tasks/completed-tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AllTasksComponent,
    ActiveTasksComponent,
    CompletedTasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
