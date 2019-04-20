import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreatesComponent } from './book-creates/book-creates.component';
import { AppRouterModuleModule } from './app-router-module.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';

// let's set a few routing
// HashLocationStrategy and LocationStrategy imports prevents 404
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreatesComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRouterModuleModule

  ],
  providers: [BookService, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
