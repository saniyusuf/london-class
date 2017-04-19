import { Component, OnInit, Input } from '@angular/core';
import { IVideo} from "../interfaces";


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() videoData: IVideo;

  constructor() { }

  ngOnInit() {
  }

}

