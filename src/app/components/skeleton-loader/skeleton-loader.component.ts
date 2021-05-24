import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() config;
  @Input() count;
  @Input() appearance;
  constructor() { }

  ngOnInit(): void {
    console.log(this.count,'count');
    console.log(this.config,'config');
  }

}
