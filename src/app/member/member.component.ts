import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.less']
})
export class MemberComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }
}
