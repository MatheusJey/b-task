import { UserModel } from 'src/app/models/user.model';
import { UsersTableState } from './users-table.reducer';
import {
  $userTableError,
  $usersTableData,
  $usersTableLoading,
} from './users-table.selectors';
import { USERS_TABLE_MOCKDATA } from './users-table-mocks.constants';

describe('Users Table Selectors', () => {
  const initialState: UsersTableState = {
    users: [],
    error: null,
    loading: false,
  };

  it('should select the loading state', () => {
    const loading = true;
    const state: UsersTableState = { ...initialState, loading };
    expect($usersTableLoading.projector(state)).toEqual(loading);
  });

  it('should select the users data', () => {
    const state: UsersTableState = {
      ...initialState,
      users: USERS_TABLE_MOCKDATA,
    };
    expect($usersTableData.projector(state)).toEqual(USERS_TABLE_MOCKDATA);
  });

  it('should select the error state', () => {
    const error = 'Something went wrong';
    const state: UsersTableState = { ...initialState, error };
    expect($userTableError.projector(state)).toEqual(error);
  });
});
