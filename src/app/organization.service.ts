import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Organization } from './organization';
import { ORGANIZATION } from './mock-organization';

@Injectable()
export class OrganizationService {

  constructor() { }

  getOrganization(): Observable<Organization> {
    return of(ORGANIZATION);
  }
}
