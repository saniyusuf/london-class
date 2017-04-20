import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IVideo} from "../interfaces";
import { VideoService } from "../video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public videoList: IVideo[];
  public selectedVideoIndex = 0;
  @Output() selectedVideoChanged = new EventEmitter<IVideo>();

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoList = this.videoService.getAllVideos();
  }

  setSelectedVideo(selectedVideoIndex){
    this.selectedVideoIndex = selectedVideoIndex;
    this.selectedVideoChanged.emit(this.videoList[selectedVideoIndex]);
  }

}

