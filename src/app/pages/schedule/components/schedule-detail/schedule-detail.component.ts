import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {
  @Input() selectedActivity = '';

  constructor() { }

  ngOnInit(): void {
  }

}
