import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'github-profile-details',
  templateUrl: './github-profile-details.component.html',
  styleUrls: ['./github-profile-details.component.scss']
})
export class GithubProfileDetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
