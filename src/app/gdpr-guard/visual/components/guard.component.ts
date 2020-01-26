import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../../directive/focused.directive'

@Component({
    selector: 'guard-input',
    templateUrl: '../templates/guard.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GuardComponent implements OnInit {
    ngOnInit(): void {
        console.log("Guard created.")
    }

    @Input() icon: string;

    @ContentChild(InputRefDirective, {static: false})input: InputRefDirective;

    @HostBinding("class.focus")
    get focus() {
        return this.input ? this.input.focus : false;
    }

    get  classes() {
        const cssClasses = {
        fa: true
        };
        cssClasses['fa-' + this.icon] = true;
        return cssClasses;
    }

}