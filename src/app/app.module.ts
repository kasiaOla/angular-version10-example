import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { CommonModule } from '@angular/common';
import { LoggerService } from './shared/shared-services/logger.service';
import { envProdServiceLogger } from '../environments/environment.prod';
import { AgGridModule } from 'ag-grid-angular';
import { AnnouncementService } from './shared/shared-services/announcement.service';
import { AuthGuardService } from './modules/core/authentication/auth-guard.service';
import { AuthService } from './modules/core/authentication/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, // moduł w ktorym zawartę są deryktywy *ngIf, *ngFor
    BrowserModule.withServerTransition({
      appId: 'serverApp'
    }),
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  exports: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    AuthGuardService,
    AnnouncementService,
    AuthService,
    {
      provide: LoggerService,
      useClass: envProdServiceLogger
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
