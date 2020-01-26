import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GdprGuardComponent } from './gdpr-guard/gdpr-guard.component'
import { GuardComponent, ManagerComponent } from './gdpr-guard/visual/components/index'

@NgModule({
  declarations: [
    AppComponent,    
    GdprGuardComponent,
    GuardComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
