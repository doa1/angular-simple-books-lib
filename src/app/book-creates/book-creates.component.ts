import { BookService } from './../book.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-creates',
  templateUrl: './book-creates.component.html',
  styleUrls: ['./book-creates.component.css']
})
export class BookCreatesComponent implements OnInit {
  book = {};
  constructor(private router: Router, private bookservice: BookService) { }

  ngOnInit() {
  }
  saveBook() {
    this.bookservice.saveBook(this.book).then((result) => {
        let id = result['_id'];
        // redirect to this doook details
        this.router.navigate(['details', id]);
    }, (err) => {console.log(err); });
  }
}
