import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { PopupComponent } from './popup/popup.component';
import { TableComponent } from './table/table.component';
import { InformationComponent } from './information/information.component';
import { SelectorComponent } from './selector/selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PopupComponent,
    TableComponent,
    InformationComponent,
    SelectorComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule.forRoot({ include: [ '/page-*' ] }),
    HttpClientModule,
    RouterModule,

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule{ }
