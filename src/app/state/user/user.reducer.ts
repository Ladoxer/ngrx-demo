import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import * as UserActions from "./user.actions";

export interface UserState{
  users: ReadonlyArray<User>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState:UserState = {
  users:[],
  loading:false,
  loaded:false,
  error:null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers,(state)=>(
    {...state,loading:true}
  )),
  on(UserActions.loadUsersSuccess,(state,{users})=>(
    {...state,loading:false,loaded:true,users}
  )),
  on(UserActions.loadUsersFailure,(state,{error})=>(
    {...state,loading:false,error}
  )),
  on(UserActions.addUser,(state,{user})=>(
    {...state,loading:true,loaded:false}
  )),
  on(UserActions.addUserSuccess,(state,{user})=>(
    {...state,user,loading:false,loaded:true,users:[...state.users,user]}
  )),
  on(UserActions.addUserFailuer,(state,{error})=>(
    {...state,loading:false,error}
  )),
  on(UserActions.removeUser,(state,{id})=>(
    {...state,loading:true,loaded:false}
  )),
  on(UserActions.removeUserSuccess,(state,{id})=>(
    {...state,loading:false,loaded:true,users:state.users.filter(x => x.id!==id)}
  )),
  on(UserActions.removeUserFailure,(state,{error})=>(
    {...state,loading:false,loaded:false,error}
  )),
);