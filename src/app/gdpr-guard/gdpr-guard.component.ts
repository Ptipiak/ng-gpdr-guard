import { Component, OnInit, Input } from '@angular/core';
import { GuardComponent, ManagerComponent} from './visual/components';

@Component({
  selector: 'lib-gdpr-guard',
  templateUrl: 'gdpr-guard.component.html',
  styleUrls: ['gdpr-guard.component.css']
})
export class GdprGuardComponent implements OnInit {

  @Input() manager: ManagerComponent; 

  constructor() { }

  ngOnInit() {
    this.manager = new ManagerComponent()
  }

}
