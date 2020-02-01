import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { GdprGuardRaw, GdprGuardGroupRaw } from '../../model/index';

@Component({
    selector: 'group',
    templateUrl: '../templates/group.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GroupComponent implements OnInit {
    
    @Input() group: GdprGuardGroupRaw;
    @Input() guards:  GdprGuardRaw[];

    ngOnInit(): void {                
        this.guards = this.group.guards        
    }
}