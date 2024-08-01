import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { JobsCardComponent } from '../shared/jobs-card/jobs-card.component';
import { FilterComponent } from '../shared/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FILTER_BUTTONS_DESC, LIST_TITLE, SEARCH_ICON, SEARCH_PLACEHOLDER } from '../constants/constants';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, JobsCardComponent, FilterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public search_placeholder: string = SEARCH_PLACEHOLDER;
  public list_title: string = LIST_TITLE;
  public filtersButton: any = FILTER_BUTTONS_DESC
  public search_Icon: string = SEARCH_ICON

  public removeFilter(index: number): void {
    this.filtersButton.splice(index, 1);
  }
} 
