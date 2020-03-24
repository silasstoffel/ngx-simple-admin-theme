import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UtilsService } from '../../services/utils.service';
import Session from '../../models/Session';
import User from '../../models/User';

@Component({
  selector: 'menu-app',
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
  isCollapsed = false;
  isAuthorized = false;
  user: User;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.sessionService.sessionEmmiter.subscribe((session: Session) => {
      if (session.authorized) {
        this.isAuthorized = true;
        this.isCollapsed = true;
        this.user = session.user;
      }
    });
  }

  signOut() {
    this.isAuthorized = false;
    this.isCollapsed = false;
    this.sessionService.destroy();
    this.utils.flashInfo('Logout efetivado');
    this.router.navigate(['/signin']);
  }
}
