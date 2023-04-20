import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'b-task-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {}
