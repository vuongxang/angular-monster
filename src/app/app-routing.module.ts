import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { MonsterDetailComponent } from './screens/monster-detail/monster-detail.component';
import { MonsterListComponent } from './screens/monster-list/monster-list.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: MonsterListComponent
      },
      {
        path: "chi-tiet/:bookId",
        component: BookDetailComponent
      },
      { 
        path: 'heroes', 
        component: HeroListComponent
      },
      { 
        path: 'monsters', 
        component: MonsterListComponent
      },
      { 
        path: 'monster-detail/:monsterId', 
        component: MonsterDetailComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: BookListComponent
      },
      {
        path: "chi-tiet/:bookId",
        component: BookDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: "",
    pathMatch: "full"
  },
  
  // { path: 'hero-unit/:id', component: HeroUnitComponent },
  // { path: 'heroes', component: HeroListComponent },
  // { path: 'book-detail/:bookId', component:BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
