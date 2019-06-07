import { Component, OnInit } from "@angular/core";

import { Book } from "src/app/shared/models/book.model";
import { BooksService } from 'src/app/shared/services/book.service';

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
  books: Book[];

  constructor(
    private booksService: BooksService,
  ) {}

  ngOnInit() {
    this.booksService.all().subscribe(books => {
      this.books = books;
    });
  }
}
