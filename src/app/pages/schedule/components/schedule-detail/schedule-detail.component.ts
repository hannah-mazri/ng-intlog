import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {
  @Input() selectedActivity = '';
  @Output() clickButtonEvent = new EventEmitter<boolean>();
  displayDrawer = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.displayDrawer = !this.displayDrawer;
    this.clickButtonEvent.emit(this.displayDrawer);
  }
}
