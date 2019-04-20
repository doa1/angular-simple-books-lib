import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.getBooksList();
  }
  getBooksList() {
    this.bookservice.getAllbooks().then((res) => {
       this.books = res;
    }, (err) => {
      console.log(err);
    } );
  }

}
