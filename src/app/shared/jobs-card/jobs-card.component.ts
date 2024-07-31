import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BOOKMARK_TEXT,
  FLAG_ICON,
  JOB_CARD_DETAILS,
  JOB_TYPE,
  LANGUAGE_TYPE,
  REPORT_TEXT,
  STAR_ICON,
} from '../../constants/constants';
@Component({
  selector: 'app-jobs-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-card.component.html',
  styleUrl: './jobs-card.component.scss',
})
export class JobsCardComponent {
  public report_text: string = REPORT_TEXT;
  public bookmark_text: string = BOOKMARK_TEXT;
  public cardDetails: any = JOB_CARD_DETAILS;
  public flag_icon: string = FLAG_ICON;
  public star_icon: string = STAR_ICON;
  public job_type: string = JOB_TYPE;
  public language: string = LANGUAGE_TYPE;
}
