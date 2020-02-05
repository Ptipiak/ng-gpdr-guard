import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { GdprGuardGroup, makeGuard, GdprManager } from 'gdpr-guard';
import { GdprGuard } from 'gdpr-guard/dist/GdprGuard'
import { GdprGuardRaw } from 'gdpr-guard/dist/GdprGuard';
import { GdprGuardGroupRaw } from 'gdpr-guard/dist/GdprGuardGroup';

@Component({
    selector: 'group',
    templateUrl: '../templates/group.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GroupComponent implements OnInit {
        
    @Input() group: GdprGuardGroup;    
    @Input() guards:  GdprGuard[] = [];
    private rawGroup: GdprGuardGroupRaw;

    ngOnInit(): void {
        this.rawGroup = this.group.raw()
        if(this.rawGroup.guards) {
            this.rawGroup.guards.forEach(guard => {
                this.guards.push(this.group.getGuard(guard.name));
            });            
        }     
    }
}