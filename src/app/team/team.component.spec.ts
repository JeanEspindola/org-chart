import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import { TeamComponent } from './team.component';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { MemberComponent } from '../member/member.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamComponent,
        TeamDetailComponent,
        MemberComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
