import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-intlog';
  displayDrawer = false;

  toggleDrawer() {
    this.displayDrawer = !this.displayDrawer;
  }
}
