import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteScoresPage } from './athlete-scores';

@NgModule({
  declarations: [
    AthleteScoresPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteScoresPage),
  ],
})
export class AthleteScoresPageModule {}
