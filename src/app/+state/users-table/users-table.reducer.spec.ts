import { USERS_TABLE_MOCKDATA } from './users-table-mocks.constants';
import {
  getUsersTable,
  getUsersTableSuccess,
  getUsersTableFailure,
} from './users-table.actions';
import { usersTableReducer, initialState } from './users-table.reducer';

describe('usersTableReducer', () => {
  it('should return the initial state', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action = {} as any;
    const state = usersTableReducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should handle getUsersTable', () => {
    const action = getUsersTable();
    const state = usersTableReducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle getUsersTableSuccess', () => {
    const action = getUsersTableSuccess({ data: USERS_TABLE_MOCKDATA });
    const state = usersTableReducer(initialState, action);

    expect(state.users).toEqual(USERS_TABLE_MOCKDATA);
    expect(state.loading).toBe(false);
  });

  it('should handle getUsersTableFailure', () => {
    const error = new Error('Failed to fetch users');
    const action = getUsersTableFailure({ error });
    const state = usersTableReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.loading).toBe(false);
  });
});
