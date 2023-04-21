import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USERS_TABLE_FEATURE_KEY, UsersTableState } from "./users-table.reducer";

const $$usersTable = createFeatureSelector<UsersTableState>(USERS_TABLE_FEATURE_KEY);

export const $usersTableLoading = createSelector($$usersTable, (state) => !!state.loading);
export const $usersTableData = createSelector($$usersTable, (state) => state.users ?? []);
export const $userTableError = createSelector($$usersTable, (state) => state.error);