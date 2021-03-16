import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../config.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  main_stacks;
  status;
  apiLoadedStatus: Boolean;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.apiLoadedStatus = true;
    this.configService
    .getConfig()
    .subscribe((data: any) => {
      this.apiLoadedStatus = false;
      this.main_stacks = data;
    });
  }

  updateStartButton(server) {
    if (server.startButton == "enabled") {
      server.startButton = "disabled";
      server.stopButton = "enabled";
      const returnData = (this.configService.postConfig({"action": "start", "id": server.id})
      .subscribe((response:any)=> {
        console.log(response)
      }));
    }
  }

  updateStopButton(server) {
    if (server.stopButton == "enabled") {
      server.stopButton = "disabled";
      server.startButton = "enabled";
      const returnData = (this.configService.postConfig({"action": "stop", "id": server.id})
      .subscribe((response:any)=> {
        console.log(response)
      }));
    }
  }
}
