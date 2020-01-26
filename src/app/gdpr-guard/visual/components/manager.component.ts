import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manager',
    templateUrl: '../templates/manager.component.html',
    styleUrls: ['../../gdpr-guard.component.css'],
})
export class ManagerComponent implements OnInit {
    ngOnInit(): void {
        console.log("Manager created.")
    }

}