import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { PhotosSectionComponent } from './components/photos-section/photos-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfessionalInsightsComponent } from './components/professional-insights/professional-insights.component';
import { IslamicInsightsComponent } from './components/islamic-insights/islamic-insights.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalDetailsComponent,
    PhotosSectionComponent,
    ProfessionalInsightsComponent,
    IslamicInsightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
