import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-app',
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
  isCollapsed = true;
  isAuthorized = true;
  user = {id: null, first_name: null, last_name: null};

  constructor() { }

  ngOnInit() { }
}
