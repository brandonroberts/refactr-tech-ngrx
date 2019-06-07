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


  
  constructor(
    private booksService: BooksService,
    private actions$: Actions
  ) {}
}