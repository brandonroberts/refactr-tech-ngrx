import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromBooks from './books.reducer';

export interface State { 
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer
};

/**
 * Selectors
 */
export const selectBooksState = (state: State) => state.books;

export const selectAllBooks = createSelector(
  selectBooksState,
  booksState => booksState.collection
);
