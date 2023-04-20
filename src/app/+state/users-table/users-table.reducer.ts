import { createReducer, on } from '@ngrx/store';
import {
  getUsersTable,
  getUsersTableFailure,
  getUsersTableSuccess,
} from './users-table.actions';
import { UserModel } from 'src/app/models/user.model';

export const USERS_TABLE_FEATURE_KEY = 'usersTable';

export interface UsersTableState {
  users: UserModel[];
  error: unknown;
  loading: boolean;
}

export const initialState: UsersTableState = {
  users: [],
  error: null,
  loading: false,
};

export const usersTableReducer = createReducer(
  initialState,
  on(getUsersTable, (state) => ({ ...state, loading: true, error: null })),
  on(getUsersTableSuccess, (state, { data }) => ({
    ...state,
    users: data,
    loading: false,
  })),
  on(getUsersTableFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
