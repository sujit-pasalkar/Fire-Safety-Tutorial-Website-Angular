import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './Component/side-nav/side-nav.component';
import {CustomMaterialModule} from "./core/material.module";
import { IntroductionComponent } from './Component/pages/introduction/introduction.component';
import { PortablefireextinguisherComponent } from './Component/pages/portablefireextinguisher/portablefireextinguisher.component';
import { FirehydrantsystemComponent } from './Component/pages/firehydrantsystem/firehydrantsystem.component';
import { FireRiserSystemComponent } from './Component/pages/fire-riser-system/fire-riser-system.component';
import { FireSprinklerSystemComponent } from './Component/pages/fire-sprinkler-system/fire-sprinkler-system.component';
import { FireSuppressionSystemComponent } from './Component/pages/fire-suppression-system/fire-suppression-system.component';
import { SmokeDetectorsComponent } from './Component/pages/smoke-detectors/smoke-detectors.component';
import { GasDetectorsComponent } from './Component/pages/gas-detectors/gas-detectors.component';
import { FireAlarmSystemComponent } from './Component/pages/fire-alarm-system/fire-alarm-system.component';
import { PASystemComponent } from './Component/pages/pasystem/pasystem.component';
import { CctvComponent } from './Component/pages/cctv/cctv.component';
import { RodentRepellentSystemComponent } from './Component/pages/rodent-repellent-system/rodent-repellent-system.component';
import { WaterLeakDetectionSystemComponent } from './Component/pages/water-leak-detection-system/water-leak-detection-system.component';
import { FireEscapesComponent } from './Component/pages/fire-escapes/fire-escapes.component';
import { SafetyMeasuresComponent } from './Component/pages/safety-measures/safety-measures.component';
import { QueryComponent } from './Component/pages/query/query.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './Component/pages/login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';



// import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
// import { MenuItem } from 'primeng/api';
// import { PanelModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { RadioButtonModule } from 'primeng/primeng';
// import { TableModule } from 'primeng/table';
// import { CheckboxModule } from 'primeng/checkbox';
// import { ToastModule } from 'primeng/toast';
// import {MessageService} from 'primeng/api';
// import {SidebarModule} from 'primeng/sidebar';
// import {ProgressSpinnerModule} from 'primeng/progressspinner';
// import {DialogModule} from 'primeng/dialog';
// import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    IntroductionComponent,
    PortablefireextinguisherComponent,
    FirehydrantsystemComponent,
    FireRiserSystemComponent,
    FireSprinklerSystemComponent,
    FireSuppressionSystemComponent,
    SmokeDetectorsComponent,
    GasDetectorsComponent,
    FireAlarmSystemComponent,
    PASystemComponent,
    CctvComponent,
    RodentRepellentSystemComponent,
    WaterLeakDetectionSystemComponent,
    FireEscapesComponent,
    SafetyMeasuresComponent,
    QueryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    MatProgressSpinnerModule

    // AccordionModule,
    // PanelModule,
    // ButtonModule,
    // RadioButtonModule,
    // TableModule,
    // CheckboxModule,
    // ToastModule,
    // SidebarModule,
    // ProgressSpinnerModule,
    // DialogModule,
    // TooltipModule

  ],
  providers: [AngularFirestore, AngularFireAuth,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
