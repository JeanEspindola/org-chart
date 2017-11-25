import { Component, OnInit } from '@angular/core';
import { Organization } from './organization';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  organization: Organization;
  title = 'Org Chart';

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
   this.getOrganizationData();
  }

  getOrganizationData(): void {
    this.organizationService.getOrganization()
      .subscribe(organization => this.organization = organization);
  }
}
