import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private userServ: UsersServiceService,
    private location: Location
  ) {}
  user!: User;
  routeSubscription!: Subscription;
  skeletonVisible = true;
  ngOnInit(): void {
    // get User
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      this.userServ.getUser(userId).subscribe({
        next: (data: any) => {
          this.user = data.data;
          this.skeletonVisible = false;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    });
  }

  // goBack
  goBack() {
    this.location.back();
  }

  // unsbsubscribe
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
