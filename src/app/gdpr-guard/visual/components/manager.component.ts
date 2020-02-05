import { Component, OnInit, Input } from '@angular/core';
import { GdprManager, GdprGuardGroup } from 'gdpr-guard'
import { GdprManagerRaw } from 'gdpr-guard/dist/GdprManager';
import { GdprGuardGroupRaw } from 'gdpr-guard/dist/GdprGuardGroup';

@Component({
    selector: 'manager',
    templateUrl: '../templates/manager.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class ManagerComponent implements OnInit {

    @Input() manager: GdprManager;    
    @Input() groups: GdprGuardGroup[] = [];
    

    ngOnInit(): void {
        this.manager.raw().groups.forEach(group => {
            this.groups.push(this.manager.getGroup(group.name))
        });   
    }

}