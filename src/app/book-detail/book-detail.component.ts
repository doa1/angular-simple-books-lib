import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book = {};
  constructor(private router: ActivatedRoute, private route: Router , private bookservice: BookService) { }

  ngOnInit() {
    this.getBookDetails(this.router.snapshot.params['id']);
  }
  getBookDetails(id) {
    this.bookservice.showBook(id).then((res) => {
      this.book = res;
    }, (err) => {console.log(err); });
  }
}
