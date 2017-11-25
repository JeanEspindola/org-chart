import { Injectable } from '@angular/core';

import { Teams } from './teams';
import { TEAMS } from './mock-teams';

@Injectable()
export class TeamService {

  constructor() { }

  getTeams(): Teams {
    return TEAMS;
  }

}
