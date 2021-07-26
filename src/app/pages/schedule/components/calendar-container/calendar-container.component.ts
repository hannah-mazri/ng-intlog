import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})
export class CalendarContainerComponent implements OnInit {
  @Input() scheduleDetail = [];
  hasActivity = true;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  date = new Date();
  currentYear: number = this.date.getFullYear();
  currentMonthIndex: number = this.date.getMonth();

  indexOfFirstDayInCurrentMonth = new Date(
    this.currentYear,
    this.date.getMonth(),
    1
  ).getDay();

  lastDateInPreviousMonth = new Date(
    this.currentYear,
    this.date.getMonth(),
    0
  ).getDate();

  totalDaysInCurrentMonth = new Date(
    this.currentYear,
    this.currentMonthIndex + 1,
    0
  ).getDate();

  constructor() {}

  ngOnInit(): void {
    this.getDatesInPreviousMonth();
    this.getDatesInCurrentMonth();
    this.getDatesInNextMonth();
  }

  get activityDates() {
    return this.scheduleDetail.map((item) => {
      return item['date'];
    });
  }

  checkActivity(date: number) {
    return this.activityDates.indexOf(date) > -1;
  }

  getDatesInPreviousMonth(): number[] {
    const arr = [];
    for (let i = this.indexOfFirstDayInCurrentMonth - 2; i >= 0; i--) {
      arr.push(this.lastDateInPreviousMonth - i);
    }
    return arr;
  }

  getDatesInCurrentMonth(): number[] {
    const arr = [];

    for (let i = 1; i <= this.totalDaysInCurrentMonth; i++) {
      arr.push(i);
    }
    return arr;
  }

  getDatesInNextMonth(): number[] {
    const arr = [];

    for (
      let i = 1;
      i <
      42 -
        this.totalDaysInCurrentMonth -
        (this.indexOfFirstDayInCurrentMonth - 2);
      i++
    ) {
      arr.push(i);
    }
    return arr;
  }
}
