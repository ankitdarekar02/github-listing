import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent implements OnInit {
  p:number;
  @Input() list: any[];
  @Input() totalRepos: any[];
  @Output() callback = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(e) {
    this.p = e;
    this.callback.emit(e);
  }

}
