import { Component, OnInit, Input } from '@angular/core';
import { GuardComponent} from './visual/components';

@Component({
  selector: 'lib-gdpr-guard',
  templateUrl: 'gdpr-guard.component.html',
  styleUrls: ['gdpr-guard.component.css']
})
export class GdprGuardComponent implements OnInit {

  @Input() guard: GuardComponent; 

  constructor() { }

  ngOnInit() {
    this.guard = new GuardComponent()
  }

}
