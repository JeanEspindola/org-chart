import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MemberComponent } from './member/member.component';
import { TeamService } from './team.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamDetailComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TeamService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
