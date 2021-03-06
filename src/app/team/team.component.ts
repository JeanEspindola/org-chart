import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  @Input() teamData: Team;
  expanded = false;

  constructor() { }

  ngOnInit() {
  }

  onDetailClick(): void {
    this.expanded = !this.expanded;
  }

}
