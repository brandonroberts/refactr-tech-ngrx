import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { BooksPageActions, BooksApiActions } from "./actions";
import { BooksService } from "../shared/services/book.service";
import {
  map,
  catchError,
  exhaustMap,
} from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class BooksApiEffects {

  loadBooks$ = createEffect(() => 
    this.actions$.pipe(
      ofType(BooksPageActions.enter),
      exhaustMap(() => 
        this.booksService.all().pipe(
          map(books => BooksApiActions.booksLoaded({ books })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private booksService: BooksService,
    private actions$: Actions
  ) {}
}