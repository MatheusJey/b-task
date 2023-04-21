import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersTableState } from './+state/users-table/users-table.reducer';
import { $userTableError, $usersTableData, $usersTableLoading } from './+state/users-table/users-table.selectors';
import { getUsersTable } from './+state/users-table/users-table.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'b-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly usersTableData$ = this.store.select($usersTableData);
  readonly isUsersTableLoading$ = this.store.select($usersTableLoading);
  readonly usersTableError$ = this.store.select($userTableError);

  constructor(private readonly store: Store<UsersTableState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersTable());
  }
}
