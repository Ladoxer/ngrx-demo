import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

// whole state

export const selectUserState = createFeatureSelector<UserState>('userState')

// parts of state

// getting Users[]
export const selectUsers = createSelector(selectUserState,(state)=> state.users);

// fetch loading
export const selectLoading = createSelector(selectUserState,(state)=> state.loading);

export const selectLoaded = createSelector(selectUserState,(state)=> state.loaded);

export const selectError = createSelector(selectUserState,(state)=> state.error);
