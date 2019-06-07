import { Book } from "src/app/shared/models/book.model";
import { Action, createReducer, on } from '@ngrx/store';
import { BooksApiActions } from 'src/app/books/actions';

export interface State {
  collection: Book[];
}

export const initialState: State = {
  collection: []
};

const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.booksLoaded, 
    (state, { books }) => ({ ...state, collection: books })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
