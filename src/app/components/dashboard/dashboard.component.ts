import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  page = '#Dashboard :D';
  constructor() { }

  ngOnInit() { }
}
