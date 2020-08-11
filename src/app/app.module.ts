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
import { LoggerService } from './shared/shared-services/logger/logger.service';
import { envProdServiceLogger } from '../environments/environment.prod';
import { AgGridModule } from 'ag-grid-angular';
import { AnnouncementService } from './shared/shared-services/announcement/announcement.service';
import { AgGridHeaderComponent } from './shared/shared-ag-grid-header/ag-grid-header.component';
import { AuthenticationModule } from './modules/core/authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgGridHeaderComponent
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
    AuthenticationModule
  ],
  exports: [
    AppComponent,
    HomeComponent,
    AgGridHeaderComponent
  ],
  providers: [
    AnnouncementService,
    {
      provide: LoggerService,
      useClass: envProdServiceLogger,
    }
  ],
  entryComponents: [
    AgGridHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
