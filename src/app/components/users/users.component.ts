import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectError, selectLoaded, selectLoading, selectUsers } from 'src/app/state/user/user.selector';
import * as UserActions from '../../state/user/user.actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  template: `
    <div *ngIf="loading$|async">
      Loading...
    </div>

    <div class="my-2"><button class="btn btn-primary" (click)="addUser()">Add more</button></div>
    <h2>Users</h2>
    <ng-container *ngIf="users$|async as users">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>
              <button class="btn btn-danger" (click)="removeUser(user.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </ng-container>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);
  loaded$ = this.store.select(selectLoaded);
  error$ = this.store.select(selectError);

  constructor(private store: Store){

  }

  addUser(){
    const user:User = {id:4,name:'Labeeb',email:"labeeb@gmail.com"}
    this.store.dispatch(UserActions.addUser({user}));
  }

  removeUser(id:number){
    this.store.dispatch(UserActions.removeUser({id}));
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
}
