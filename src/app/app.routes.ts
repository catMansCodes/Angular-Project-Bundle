import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileCardComponent } from './projects/profile-card/profile-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterAppComponent } from './projects/counter-app/counter-app.component';
import { TodoAppComponent } from './projects/todo-app/todo-app.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/profile-card', component: ProfileCardComponent },
  { path: 'projects/counter-app', component: CounterAppComponent },
  { path: 'projects/todo-app', component: TodoAppComponent },
  { path: '**', component: PageNotFoundComponent },
];
