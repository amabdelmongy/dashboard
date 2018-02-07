import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'create-ticket', title: 'Submit new ticket', icon:'content_paste', class: '' },
    { path: 'table-list', title: 'Table List', icon: '', class: '' },
    { path: 'login', title: 'login', icon: 'person', class: '' } 

   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
