import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { JobsCardComponent } from '../shared/jobs-card/jobs-card.component';
import { FilterComponent } from '../shared/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FILLTER_APPLIED_MESSAGE, LIST_TITLE, SEARCH_ICON, SEARCH_PLACEHOLDER } from '../constants/constants';
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
  public filtersButton: any = [];
  public search_Icon: string = SEARCH_ICON
  public appliedFilters: any[] = [];
  public filter_applied_message: string = FILLTER_APPLIED_MESSAGE;
  public isVisible: boolean = false;

  public showPopup() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  }

  public removeFilter(index: number): void {
    this.filtersButton.splice(index, 1);
  }

  public onFiltersApplied(filters: any[]): void {
    // Filter out any filters that have no selected categories
    const validFilters = filters.filter(filter => filter.categories.length > 0);

    validFilters.forEach(filter => {
      // Check if the filter with the same name already exists in filtersButton
      const existingFilterIndex = this.filtersButton.findIndex((fb: { name: any; }) => fb.name === filter.name);
      this.showPopup()
      if (existingFilterIndex !== -1) {
        // If the filter already exists, update its categories
        this.filtersButton[existingFilterIndex].category = filter.categories.join(', ');
      } else {
        // If the filter does not exist, add it to the array
        const formattedFilter = {
          name: filter.name,
          category: filter.categories.join(', '), // Join all selected categories with a comma
          image: 'work', // Assuming 'work' is the intended image for all filters
        };

        this.filtersButton.push(formattedFilter);
      }
    });
  }



} 
