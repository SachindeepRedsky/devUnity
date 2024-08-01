import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME1, APP_NAME2, APP_NAME3, NAV_ITEMS, TOGGLE_MENU_ICON, USER_NAME } from '../../constants/constants';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {
    this.getInitialString(this.userName);
  }
  public appName1: string = APP_NAME1;
  public appName2: string = APP_NAME2;
  public appName3: string = APP_NAME3;
  public userName: string = USER_NAME;
  public navItems: any = NAV_ITEMS;
  public toggleIcon: string = TOGGLE_MENU_ICON;
  public userId: string = '';

  public toggleMenu() { }

  public getInitialString(fullName: string) {
    const nameParts = fullName.split(' ');

    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join('');

    this.userId = initials;
  }
}
