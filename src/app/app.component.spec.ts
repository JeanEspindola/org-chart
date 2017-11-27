import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MemberComponent } from './member/member.component';
import { OrganizationService } from './organization.service';
import { Organization } from './organization';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let organizationService: OrganizationService;
  let app: AppComponent;
  let organization: Organization;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TeamComponent,
        TeamDetailComponent,
        MemberComponent
      ],
      providers: [OrganizationService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    organizationService = fixture.debugElement.injector.get(OrganizationService);

    organization = {
      organization: 'Lobster',
      location: 'Austin',
      teams: [
        {team: 'Tech', location: 'Amsterdam', picture: 'www.picture.com', members: []},
        {team: 'Inc', location: 'Cape Town', picture: 'www.picture.com', members: []}
      ]
    };
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should not call getOrganization Service before OnInit', () => {
    spy = spyOn(organizationService, 'getOrganization').and.returnValue(Observable.of(organization));
    expect(spy.calls.any()).toBe(false);
  });

  it('should call getOrganizationData', async(() => {
    spy = spyOn(organizationService, 'getOrganization').and.returnValue(Observable.of(organization));

    app.getOrganizationData();
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'getOrganization called');
    expect(app.organization === organization).toBeTruthy();
  }));

  it(`should have as title 'Org Chart'`, async(() => {
    expect(app.title).toEqual('Organization Chart');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Organization Chart');
  }));

});
