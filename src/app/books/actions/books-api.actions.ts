import { Book } from "src/app/shared/models/book.model";
import { createAction, props } from "@ngrx/store";

export const booksLoaded = createAction(
  '[Books API] Books Loaded',
  props<{ books: Book[] }>()
);
