import { Component, OnInit } from "@angular/core";

import { Book } from "src/app/shared/models/book.model";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksPageActions } from 'src/app/books/actions';
import * as fromRoot from 'src/app/shared/state';

@Component({
  selector: "app-books",
  templateUrl: "./books-page.component.html",
  styleUrls: ["./books-page.component.css"]
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.books$ = this.store.select(fromRoot.selectAllBooks);
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.store.dispatch(BooksPageActions.enter());
  }
}
