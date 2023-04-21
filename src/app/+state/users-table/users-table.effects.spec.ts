import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { UsersTableEffects } from './users-table.effects';
import {
  getUsersTable,
  getUsersTableFailure,
  getUsersTableSuccess,
} from './users-table.actions';
import { DataService } from 'src/app/services/data.service';
import { USERS_TABLE_MOCKDATA } from './users-table-mocks.constants';
import { cold, hot } from 'jasmine-marbles';

describe('UsersTableEffects', () => {
  let actions$: Actions;
  let effects: UsersTableEffects;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersTableEffects,
        provideMockActions(() => actions$),
        {
          provide: DataService,
          useValue: {
            getUsers: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(UsersTableEffects);
    dataService = TestBed.inject(DataService);
  });

  it('should return getUsersTableSuccess action on success', () => {
    const action = getUsersTable();
    const completion = getUsersTableSuccess({ data: USERS_TABLE_MOCKDATA });
  
    actions$ = hot('-a|', { a: action });
    const response = cold('-a|', { a: USERS_TABLE_MOCKDATA });
    jest.spyOn(dataService, 'getUsers').mockReturnValue(response);

    const expected = cold('--b|', { b: completion });
    expect(effects.loadData$).toBeObservable(expected);    
  });

  it('should return getUsersTableFailure action on failure', () => {
    const action = getUsersTable();
    const completion = getUsersTableFailure({ error: 'error' });
  
    actions$ = hot('-a|', { a: action });
    const response = cold('-#|', { a: USERS_TABLE_MOCKDATA });
    jest.spyOn(dataService, 'getUsers').mockReturnValue(response);

    const expected = cold('--(b|)', { b: completion });
    expect(effects.loadData$).toBeObservable(expected);    
  });
});
