import { createReducer, on } from "@ngrx/store";
import * as ConterActions from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(ConterActions.increment,(state) => state + 1),
  on(ConterActions.decrement,(state) => state - 1),
  on(ConterActions.reset,(state) => 0)
);