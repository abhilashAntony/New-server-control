import { Component, OnInit,Input, ViewChild, OnChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  // Stores values of API get request and the progress spinner status
  mainStacks: any;
  apiLoadedStatus: boolean;

  // ViewChild obtains access to the mat-drawer element
  @ViewChild('drawer', {static: false}) public drawer: MatDrawer;
  @Input() openDrawer: boolean;
  constructor(private configService: ConfigService) { }

  // Initializing the stack data from API call
  ngOnInit(): void {
    this.apiLoadedStatus = true;
    this.configService
        .getConfig()
        .subscribe((data: any) => {
          this.apiLoadedStatus = false;
          this.mainStacks = data;
        });
  }

  // Detect changes to openDrawer to toggle the drawer component
  ngOnChanges(): void {
    if (this.drawer !== undefined) {
      this.drawer.toggle();
    }
  }

  // Controls the functionality of the start button
  updateStartButton(server): void {
    if (server.startButton === 'enabled') {
      server.startButton = 'disabled';
      server.stopButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'start', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }

  // Controls the functionality of the stop button
  updateStopButton(server): void {
    if (server.stopButton === 'enabled') {
      server.stopButton = 'disabled';
      server.startButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'stop', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }
}
