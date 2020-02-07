import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { GdprGuardGroup, makeGuard, GdprManager } from 'gdpr-guard';
import { GdprGuard } from 'gdpr-guard/dist/GdprGuard'
import { GdprGuardRaw } from 'gdpr-guard/dist/GdprGuard';
import { GdprGuardGroupRaw } from 'gdpr-guard/dist/GdprGuardGroup';

@Component({
    selector: 'guard',
    templateUrl: '../templates/group.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GroupComponent implements OnInit {
        
    @Input() guard: GdprGuardGroup;    
    guards:  GdprGuard[] = [];
    private rawGuard: GdprGuardGroupRaw;

    ngOnInit(): void {
        this.rawGuard = this.guard.raw()
        if(this.rawGuard.guards) {
            this.rawGuard.guards.forEach(el => {
                this.guards.push(this.guard.getGuard(el.name));
            });            
        }     
    }
}