import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server Control Dashboard';
  openDrawer = true;

  // Function changes isOpen property to toggle drawer component
  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }
}
