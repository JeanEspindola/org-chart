import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../member';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.less']
})

export class TeamDetailComponent implements OnInit {
  @Input() membersList: Array<Member>;

  constructor() { }

  ngOnInit() {
  }

}
