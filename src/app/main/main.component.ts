import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Members',
      route: '/members',
      icon: 'people',
    }, {
      title: 'Sponsors',
      route: '/sponsors',
      icon: 'business',
    }, {
      title: 'Photos',
      route: '/photos',
      icon: 'collections',
    }, {
      title: 'Pages',
      route: '/pages',
      icon: 'description',
    }, {
      title: 'Discussions',
      route: '/discussions',
      icon: 'forum',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
