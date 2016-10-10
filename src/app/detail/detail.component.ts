import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { Router, ActivatedRoute } from '@angular/router';

import { ItemsService, UsersService } from '../../services';

@Component({
  selector: 'qs-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
  viewProviders: [ ItemsService, UsersService ],
})
export class DetailComponent implements OnInit {

  item: Object = {};
  users: Object[];

  constructor(private _router: Router, private _itemsService: ItemsService,
              private _usersService: UsersService, private _route: ActivatedRoute,
              private _location: Location) {}

  goBack(): void {
    this._location.back();
  }

  ngOnInit(): void {
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
    });
    this._route.params.subscribe((params: {id: string}) => {
      let itemId: string = params.id;
      this._itemsService.get(itemId).subscribe((item: Object) => {
        this.item = item;
      }, (error: Error) => {
        this._itemsService.staticGet(itemId).subscribe((item: Object) => {
          this.item = item;
        });
      });
    });
  }
}
