import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {
  @Input() profile: any;
  constructor() { }

  ngOnInit(): void {
  }

}
