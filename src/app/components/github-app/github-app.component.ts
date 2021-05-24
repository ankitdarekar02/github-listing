import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {
  public searchText : string;
  public profileLoader : boolean = false;
  public repoLoader : boolean = false;
  public userProfileData : any = {};
  public userProfileRepo:any[] = [];
  public errorMessage : string;
  public pageNumber : number = 0;
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {

  }

  pageChangeCallback(pageNumber) {
    this.pageNumber = pageNumber;
    this.fetchRepos();
  }

  fetchRepos() {
    this.repoLoader = true;
    this.githubService.getUserRepositories(this.searchText, this.pageNumber).subscribe((data) => {
      this.userProfileRepo = data;
      this.repoLoader = false;
    },(err: any) => {
      this.userProfileRepo = [];
      console.log("no repositories found");
    });
  }

  fetchUserProfile() {
    this.profileLoader = true;
    this.githubService.getUserProfile(this.searchText).subscribe((data) => {
      this.userProfileData = data;
      this.profileLoader = false;
    },(err: any) => {
      this.userProfileData = {};
      console.log("no such profile found");
    });
  }

  searchUser() {
    this.pageNumber = 1;
    // get user profile data
    this.fetchUserProfile();
    // get user profile repositories
    this.fetchRepos();
  }

}


