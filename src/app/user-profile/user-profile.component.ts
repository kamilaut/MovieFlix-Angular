import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any;
  editMode = false;
  editedUser: any = {};
  
  constructor(
    private fetchApiData: FetchApiDataService,
    private router: Router,
  ) { }
  
  
  ngOnInit(): void {
    this.fetchApiData.getOneuser('userName').subscribe((response: any) => {
      this.user = response;
      this.editedUser = { ...this.user };  
    });
  }
  
  saveChanges(): void {
    this.fetchApiData.editUser('userName', this.editedUser).subscribe((response: any) => {
      this.user = response;
      this.editMode = false;
      this.router.navigate(['/profile']);
    });
  }
  
}

