import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailComponent } from './team-detail.component';
import { MemberComponent } from '../member/member.component';
import { Member } from '../member';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;
  let expectedMemberList: Array<Member>;

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
    expectedMemberList = [
      {name: 'Jean Espindola', age: 33, imageUrl: 'http://jeanespindola.pic', role: 'Software Engineer'},
      {name: 'Maiara Espindola', age: 28, imageUrl: 'http://maiaraespindola.pic', role: 'Product Owner'}
    ];
    component.membersList = expectedMemberList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
