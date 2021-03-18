import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables referencing title and the toggle status of drawer
  title = 'Server Control Dashboard';
  openDrawer = false;

  // Function changes isOpen property to toggle drawer component
  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }
}
