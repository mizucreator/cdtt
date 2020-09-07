import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isShowActions = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showActions() {
    this.isShowActions = !this.isShowActions;
  }
}
