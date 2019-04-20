import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {};
  constructor(private route: Router, private bookservice: BookService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetails(this.router.snapshot.params['id']);
  }
  getBookDetails(id) {
    this.bookservice.showBook(id).then((result) => {
      this.book = result;
    }, (err) => {console.log(err); });
  }
// update the book details and redirect
updateBook(id) {
  this.bookservice.updateBook(id, this.book).then((result) => {
     let id_ = result['_id'];
     this.route.navigate(['/details', id_]);
  }, (error) => {console.log(error); });

}
}
