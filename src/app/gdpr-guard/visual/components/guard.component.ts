import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'guard',
    templateUrl: '../templates/guard.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class GuardComponent implements OnInit {
    ngOnInit(): void {
        console.log("Guard created.")
    }

}