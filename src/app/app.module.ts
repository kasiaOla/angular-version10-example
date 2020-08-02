import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { AuthGuardService } from './modules/auth-guard.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './modules/auth.service';
import { LoggerService } from './shared-services/logger.service';
import { envServiceLogger } from '../environments/environment.prod';
import { AgGridModule } from 'ag-grid-angular';


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
  providers: [AuthGuardService, AuthService,  {provide: LoggerService, useClass: envServiceLogger} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
