import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthletesScoresPage } from './athletes-scores';

@NgModule({
  declarations: [
    AthletesScoresPage,
  ],
  imports: [
    IonicPageModule.forChild(AthletesScoresPage),
  ],
})
export class AthletesScoresPageModule {}
