import { Component, OnInit } from '@angular/core';
import {ScheduleDetail} from './components/calendar-container/calendar-container.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  selectedActivity = '';
  scheduleDetail: ScheduleDetail[] = [
    {
      id: 0,
      date: 12,
      monthIndex: 6,
      year: 2021,
      activity: 'interview',
    },
    {
      id: 1,
      date: 13,
      monthIndex: 6,
      year: 2021,
      activity: 'write blog',
    },
    {
      id: 2,
      date: 24,
      monthIndex: 6,
      year: 2021,
      activity: 'code virtual assistant',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  passScheduleDetail(date: number): void {
    const dateArr = this.scheduleDetail.map(item => item.date);
    const idx = dateArr.indexOf(date);
    if (idx > -1) {
      this.selectedActivity = this.scheduleDetail[idx].activity;
    } else {
      this.selectedActivity = '';
    }
  }
}
