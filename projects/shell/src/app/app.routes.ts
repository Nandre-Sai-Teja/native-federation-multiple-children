import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'todo1',
        loadComponent: () =>
            loadRemoteModule('todo1', './Component').then((m) => m.AppComponent),
    },
    {
        path: 'todo2',
        loadComponent: () =>
            loadRemoteModule('todo2', './Component').then((m) => m.AppComponent),
    },
    {
        path: '**',
        component: HomeComponent,
    },
];