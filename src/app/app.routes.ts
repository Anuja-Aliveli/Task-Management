import { Routes } from '@angular/router';
import { TaskFormComponent } from './TaskForm/TaskForm.component';
import { TaskListComponent } from './TaskList/TaskList.component';
import { TaskViewComponent } from './TaskView/TaskView.component';

export const routes: Routes = [

  { path: 'tasks/create', component: TaskFormComponent },
  { path: 'tasks/edit', component: TaskFormComponent },
  { path: 'tasks/list', component: TaskListComponent },
  { path: 'tasks/view', component: TaskViewComponent },
];
