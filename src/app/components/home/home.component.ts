import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // variables
  isActive = false;
  users: User[] = [];
  filteredUsers: User[] = [];
  pageIndex!: number[];
  activeIndex = 1;
  skeletonVisible = true;
  constructor(private userServ: UsersServiceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // getting users
  getUsers(pageIndex = 1) {
    this.activeIndex = pageIndex;
    this.userServ.getUsers(pageIndex).subscribe({
      next: (data: any) => {
        this.users = data.data;
        const length = data.total_pages;
        this.pageIndex = Array.from({ length }, (_, index) => index + 1);
        this.filteredUsers = data.data;
        this.skeletonVisible = false;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  // searchforUsers
  search(event: Event) {
    const searchQuery = event.target as HTMLInputElement;
    if (searchQuery.value !== '') {
      this.filteredUsers = this.users.filter((user: User) => {
        return user.id.toString() == searchQuery.value;
      });
    } else {
      this.filteredUsers = this.users;
    }
  }
}
