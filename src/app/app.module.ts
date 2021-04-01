import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { MonsterListComponent } from './screens/monster-list/monster-list.component';
import {HeroFormComponent} from './components/hero-form/hero-form.component';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './screens/book-list/book-list.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonsterUnitComponent } from './components/monster-unit/monster-unit.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { MonsterDetailComponent } from './screens/monster-detail/monster-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductUnitComponent,
    StudentComponent,
    StudentDetailComponent,
    HeroListComponent,
    HeroUnitComponent,
    MonsterListComponent,
    HeroFormComponent,
    GenderPipePipe,
    BookListComponent,
    BookDetailComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    MonsterUnitComponent,
    MonsterFormComponent,
    MonsterDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
