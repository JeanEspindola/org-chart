import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MemberComponent } from './member/member.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
