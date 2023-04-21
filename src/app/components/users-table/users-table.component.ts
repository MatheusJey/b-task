import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'b-task-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent {
  userPairs: UserModel[][] = [];

  @Input() isUsersTableLoading: boolean | null = false;
  @Input() usersTableError: unknown = null;

  /**
   * This function creates an array of arrays, where each sub-array contains two users.
   * If there are an odd number of users, the last sub-array will contain only one user.
   * @param usersTableData - An array of users from the User Table
   */
  @Input() set usersTableData(usersTableData: UserModel[] | null) {
    if (usersTableData == null) return;

    this.userPairs = usersTableData.reduce(
      (acc: UserModel[][], user: UserModel) => {
        const lastRow = acc[acc.length - 1];
        if (lastRow && lastRow.length < 2) {
          lastRow.push(user);
        } else {
          acc.push([user]);
        }
        return acc;
      },
      []
    );
  }
}
