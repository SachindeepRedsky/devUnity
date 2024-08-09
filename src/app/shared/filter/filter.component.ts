import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APPLY_BUTTON_TEXT, CLEAR_BUTTON_TEXT, DROP_DOWN_ARROW, FILTER_ITEMS, FILTER_TITLE } from '../../constants/constants';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  public filter_heading: string = FILTER_TITLE;
  public clear_btn_text: string = CLEAR_BUTTON_TEXT;
  public apply_btn_text: string = APPLY_BUTTON_TEXT;
  public filterItems = ([] = FILTER_ITEMS);
  public drop_down_arrow: string = DROP_DOWN_ARROW;
  public activeIndex: number | null = 1;
  public checkedItems: boolean[][] = [];
  public selectedFilters: any[] = [];
  @Output() filtersApplied = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.checkedItems = this.filterItems.map(item => item.optionList.map(() => false));
  }

  public toggleContent(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  public clearAll(): void {
    this.checkedItems = this.checkedItems.map(options => options.map(() => false));
  }

  public applyFilter(): void {
    this.selectedFilters = [];

    this.checkedItems.forEach((itemChecked, i) => {
      let filterIndex = this.selectedFilters.findIndex(filter => filter.name === this.filterItems[i].title);
      if (filterIndex === -1) {
        // If the filter is not already in the selectedFilters array, add it
        this.selectedFilters.push({
          name: this.filterItems[i].title,
          categories: [],
          image: 'badge',
        });
        filterIndex = this.selectedFilters.length - 1;
      }

      itemChecked.forEach((isChecked, j) => {
        if (isChecked) {
          this.selectedFilters[filterIndex].categories.push(this.filterItems[i].optionList[j]);
        }
      });
    });

    this.filtersApplied.emit(this.selectedFilters); // Emit the selected filters to the parent component

    this.selectedFilters = []; // Clear the selectedFilters array after emitting
  }


}
