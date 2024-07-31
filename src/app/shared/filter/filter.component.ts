import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPLY_BUTTON_TEXT, CLEAR_BUTTON_TEXT, DROP_DOWN_ARROW, FILTER_ITEMS, FILTER_TITLE } from '../../constants/constants';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  public filter_heading: string = FILTER_TITLE;
  public clear_btn_text: string = CLEAR_BUTTON_TEXT;
  public apply_btn_text: string = APPLY_BUTTON_TEXT;
  public filterItems = ([] = FILTER_ITEMS);
  public drop_down_arrow: string = DROP_DOWN_ARROW;
  public activeIndex: number | null = 1;

  public toggleContent(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
