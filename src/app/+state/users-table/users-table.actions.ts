import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const getUsersTable = createAction('[Users table] Loading...');

export const getUsersTableSuccess = createAction(
  '[Users table] Load Data Success',
  props<{ data: UserModel[] }>()
);

export const getUsersTableFailure = createAction(
  '[Users table] Load Data Failure',
  props<{ error: unknown }>()
);
