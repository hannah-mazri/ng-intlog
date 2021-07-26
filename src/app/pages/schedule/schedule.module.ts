import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';

@NgModule({
  declarations: [ScheduleComponent, CalendarContainerComponent],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
