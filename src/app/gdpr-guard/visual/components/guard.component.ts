import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { FocusedDirective } from '../../directive/focused.directive';
import { GdprGuard } from '../../model/GdprGuard';

@Component({
    selector: 'guard',
    templateUrl: '../templates/guard.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GuardComponent implements OnInit {
            
    @Input() guard: GdprGuard;

    ngOnInit(): void {                
        console.log(this.guard)
    }
    
    switch = () => {
        this.guard.toggle()        
    }
}