// loadUsers, loadUsersSuccess, loadUsersFailure
// addUser, addUserSuccess, addUserFailuer
// removeUser, removeuserSuccess, removeUserFailure

import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loadUsers = createAction('[User Component] Load Users');
export const loadUsersSuccess = createAction('[User Component] Load Users Success',props<{users:readonly User[]}>());
export const loadUsersFailure = createAction('[User Component] Load Users Failure',props<{error: any}>());

export const addUser = createAction('[User Component] add User',props<{user:User}>());
export const addUserSuccess = createAction('[User Component] add User Success',props<{user:User}>());
export const addUserFailuer = createAction('[User Component] add User Failure',props<{error: any}>());

export const removeUser = createAction('[User Component] remove User',props<{id: number}>());
export const removeUserSuccess = createAction('[User Component] remove User Success',props<{id: number}>());
export const removeUserFailure = createAction('[User Component] remove User Failure',props<{error: any}>());