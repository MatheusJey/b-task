import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {
  getUsersTable,
  getUsersTableFailure,
  getUsersTableSuccess,
} from './users-table.actions';

@Injectable()
export class UsersTableEffects {
  readonly loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersTable),
      switchMap(() =>
        this.dataService.getUsers().pipe(
          map((data) => getUsersTableSuccess({ data })),
          catchError((error) => of(getUsersTableFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
