import { Component, OnInit, Input } from '@angular/core';
import { GdprManagerRaw } from 'gdpr-guard/dist/GdprManager'
import { GdprManagerBuilder, GdprStorage, GdprManager} from 'gdpr-guard'

@Component({
  selector: 'lib-gdpr-guard',
  templateUrl: 'gdpr-guard.component.html',
  styleUrls: ['gdpr-guard.component.css']
})
export class GdprGuardComponent implements OnInit {

  @Input() manager: GdprManager;
  @Input() managerRaw: GdprManagerRaw;

  constructor() {    
  }

  ngOnInit(): void {
    const manager = GdprManagerBuilder.make()
    .startRequiredGroup(GdprStorage.Cookie, "Functionalities", "Information purely used for the user's experience")
    // This is a group that by default uses cookies for storage, every option and the group itself is required
        .withEnabledGuard("PHP_SESSID", "Server session identifier")
        .startGuard()
            .withName("theme")
            .withDescription("User's current colors' theme")
            .storedIn(GdprStorage.LocalStorage)
        .endGuard()
    .endGroup()
    .startGroup(GdprStorage.Cookie, "Advertisement", "Tracking-based avertisement informations")
      .startGroup(GdprStorage.Cookie, "Advertisement : Local", "Sitewide advertisement informations")
        .startGuard()
          .withName("my guard")
          .withDescription("This is a test guard")
          .storedIn(GdprStorage.LocalStorage)
        .endGuard()
        .startGuard()
          .withName("my second guard")
          .withDescription("This is a test guard")
          .storedIn(GdprStorage.LocalStorage)
        .endGuard()
        .startGuard()
          .withName("my third guard")
          .withDescription("This is a test guard")
          .storedIn(GdprStorage.LocalStorage)
        .endGuard()
      .endGroup()
      .startGroup(GdprStorage.Cookie, "Advertisement : 3rd-party", "my group within a group")
        .startGuard()
          .withName("my guard withing a group within a grou guard")
          .withDescription("Wouah, much group, such guard, lots of data protection")
          .storedIn(GdprStorage.LocalStorage)
        .endGuard()
      .endGroup()
    .endGroup()    
    .build();
    this.manager = manager    
    this.managerRaw = manager.raw()
  }  

}
