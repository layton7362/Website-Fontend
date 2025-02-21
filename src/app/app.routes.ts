import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'idea',
        component: IdeaComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }