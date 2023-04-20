import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { USERS_TABLE_FEATURE_KEY, usersTableReducer } from './users-table/users-table.reducer';
import { UsersTableEffects } from './users-table/users-table.effects';
import { EffectsModule } from '@ngrx/effects';

const effects = [UsersTableEffects];

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(USERS_TABLE_FEATURE_KEY, usersTableReducer), EffectsModule.forFeature(effects)]
})
export class DataStoreModule {}
