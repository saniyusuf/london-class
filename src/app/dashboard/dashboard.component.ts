import { Component, OnInit } from '@angular/core';
import {IVideo} from "../interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public selectedVideo: IVideo;
  constructor() { }

  ngOnInit() {
  }

  videoSelectionChanged(video: IVideo){
    this.selectedVideo = video;
  }

}
