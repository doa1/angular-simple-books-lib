import { BASE_URL_CONFIG } from './config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ERROR_COLLECTOR_TOKEN } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { resolve } from 'q';
const base_url: string = BASE_URL_CONFIG;
@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }
  getAllbooks() {
    return new Promise((resolve, reject) => {
  this.http.get(base_url + '')
  .pipe(map(res => res ))
    .subscribe(res => { resolve(res);
     }, (err) => {reject(err); } );
    });
  }
  // get single ibook
  showBook(id) {
    return new Promise(( resolve, reject) => {
      this.http.get(base_url + 'details/' + id )
        .pipe(map(res => res))// orignal res.json
        .subscribe(res => {
          resolve(res);
        }, (err) => {reject(err); });

    });
  }
  // post book record
  saveBook(data) {
    return new Promise((resolve, reject) => {
      this.http.post(base_url + 'create', data)
        .pipe(map(res => res))
        .subscribe(res => {
          resolve(res);
        }, (err) => reject(err));
    });
  }

// update book record
updateBook(id, data) {
  return new Promise((resolve, reject) => {
    this.http.put('/book/' + id, data)
      .subscribe(res => {
        resolve(res);
      }, (err) => reject(err));
  } );
}
// delete the book
deleteBook(id){
  return new Promise((resolve, reject) => {
    this.http.delete(base_url + '/book/' + id)
        .subscribe(res => { resolve(res); },
        (err) => {reject(err); });
  });
}
}
