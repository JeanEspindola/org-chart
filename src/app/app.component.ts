import { Component, OnInit } from '@angular/core';
import { Organization } from './organization';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  data: Organization;
  title = 'Org Chart';

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getTeamsData();
  }

  getTeamsData(): void {
    this.organizationService.getTeams()
      .subscribe(data => this.data = data);
    console.log(this.data);
  }
}
