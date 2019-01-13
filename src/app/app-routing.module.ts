import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { IntroductionComponent } from "./Component/pages/introduction/introduction.component";
import { PortablefireextinguisherComponent } from "./Component/pages/portablefireextinguisher/portablefireextinguisher.component";
import { FirehydrantsystemComponent } from "./Component/pages/firehydrantsystem/firehydrantsystem.component";
import { FireRiserSystemComponent } from "./Component/pages/fire-riser-system/fire-riser-system.component";
import { FireSprinklerSystemComponent } from "./Component/pages/fire-sprinkler-system/fire-sprinkler-system.component";
import { FireSuppressionSystemComponent } from "./Component/pages/fire-suppression-system/fire-suppression-system.component";
import { SmokeDetectorsComponent } from "./Component/pages/smoke-detectors/smoke-detectors.component";
import { GasDetectorsComponent } from "./Component/pages/gas-detectors/gas-detectors.component";
import { FireAlarmSystemComponent } from "./Component/pages/fire-alarm-system/fire-alarm-system.component";
import { PASystemComponent } from "./Component/pages/pasystem/pasystem.component";
import { CctvComponent } from "./Component/pages/cctv/cctv.component";

import { RodentRepellentSystemComponent } from "./Component/pages/rodent-repellent-system/rodent-repellent-system.component";
import { WaterLeakDetectionSystemComponent } from "./Component/pages/water-leak-detection-system/water-leak-detection-system.component";
import { SafetyMeasuresComponent } from "./Component/pages/safety-measures/safety-measures.component";
import { QueryComponent } from "./Component/pages/query/query.component";
import { FireEscapesComponent } from "./Component/pages/fire-escapes/fire-escapes.component";
import { LoginComponent } from "./Component/pages/login/login.component";

import { SideNavComponent } from "./Component/side-nav/side-nav.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'IntroductionComponent', component: IntroductionComponent },
  { path: 'FireAlarmSystemComponent', component: FireAlarmSystemComponent },
  { path: 'PortablefireextinguisherComponent', component: PortablefireextinguisherComponent },
  { path: 'FirehydrantsystemComponent', component: FirehydrantsystemComponent },
  { path: 'FireRiserSystemComponent', component: FireRiserSystemComponent },
  { path: 'FireSprinklerSystemComponent', component: FireSprinklerSystemComponent },
  { path: 'FireSuppressionSystemComponent', component: FireSuppressionSystemComponent },
  { path: 'SmokeDetectorsComponent', component: SmokeDetectorsComponent },
  { path: 'GasDetectorsComponent', component: GasDetectorsComponent },
  { path: 'PASystemComponent', component: PASystemComponent },
  { path: 'CctvComponent', component: CctvComponent },
  { path: 'RodentRepellentSystemComponent', component: RodentRepellentSystemComponent },
  { path: 'WaterLeakDetectionSystemComponent', component: WaterLeakDetectionSystemComponent },
  { path: 'SafetyMeasuresComponent', component: SafetyMeasuresComponent },
  { path: 'QueryComponent', component: QueryComponent },
  { path: 'FireEscapesComponent', component: FireEscapesComponent },
  { path: 'LoginComponent', component: LoginComponent },

  { path: 'SideNavComponent', component: SideNavComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
