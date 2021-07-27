import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import {ScheduleDetailComponent} from './components/schedule-detail/schedule-detail.component';

@NgModule({
  declarations: [ScheduleComponent, ScheduleDetailComponent, CalendarContainerComponent],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
