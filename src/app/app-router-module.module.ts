import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookCreatesComponent } from './book-creates/book-creates.component';
const ROUTES = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BookComponent},
  {path: 'details/:id', component: BookDetailComponent},
  {path: 'book-create', component: BookCreatesComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule ], // making it available outside this class
  declarations: []
})
export class AppRouterModuleModule { }
