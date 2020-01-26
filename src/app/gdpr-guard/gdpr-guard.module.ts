import { NgModule } from '@angular/core';
import { GdprGuardComponent } from './gdpr-guard.component';
import { GuardComponent } from './visual/components/guard.component';



@NgModule({
  declarations: [
    GdprGuardComponent,
    GuardComponent
  ],
  imports: [
  ],
  exports: [
    GdprGuardComponent    
  ]
})
export class GpdrGuardModule { }
