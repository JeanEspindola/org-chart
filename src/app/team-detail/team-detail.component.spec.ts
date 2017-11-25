import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailComponent } from './team-detail.component';
import { MemberComponent } from '../member/member.component';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamDetailComponent,
        MemberComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
