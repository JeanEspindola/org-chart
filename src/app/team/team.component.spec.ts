import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';

import { TeamComponent } from './team.component';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { MemberComponent } from '../member/member.component';
import { Team } from '../team';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let expectedTeamData: Team;

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
    expectedTeamData = {
      team: 'Tech',
      location: 'Amsterdam',
      picture: 'www.picture.com',
      members: []
    };
    component.teamData = expectedTeamData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display team name', () => {
    const expectedTeamName = expectedTeamData.team.toUpperCase();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(expectedTeamName);
  });

  it('should display team location', () => {
    const expectedTeamLocation = expectedTeamData.location;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain('Location: ' + expectedTeamLocation);
  });

  it('should expand/collapse', () => {
    component.expanded = true;
    component.onDetailClick();
    expect(component.expanded).toBeFalsy();
  });
});
