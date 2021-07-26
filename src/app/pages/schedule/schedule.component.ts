import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  scheduleDetail = [
    {
      date: 12,
      monthIndex: 6,
      year: 2021,
      activity: 'interview',
    },
    {
      date: 13,
      monthIndex: 6,
      year: 2021,
      activity: 'write blog',
    },
    {
      date: 24,
      monthIndex: 6,
      year: 2021,
      activity: 'code virtual assistant',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
