import { Component, OnInit, Input } from '@angular/core';
import { GdprManagerRaw, GdprGuardGroupRaw, GdprGuardGroup } from '../../model/index';

@Component({
    selector: 'manager',
    templateUrl: '../templates/manager.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class ManagerComponent implements OnInit {

    @Input() manager: GdprManagerRaw;
    @Input() groups: GdprGuardGroupRaw[] = [];

    ngOnInit(): void {                
        this.groups = this.manager.groups    
    }

}