import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponent } from './member.component';
import { Member } from '../member';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let expectedMember: Member;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    expectedMember = {name: 'Jean Espindola', age: 33, imageUrl: 'http://jeanespindola.pic'};
    component.member = expectedMember;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
