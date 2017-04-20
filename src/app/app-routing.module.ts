import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

/**
 * Components
 */
import { VideoListComponent } from './video-list/video-list.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { VideoFiltersComponent } from './video-filters/video-filters.component';
import { StatGraphsComponent } from './stat-graphs/stat-graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { VideoService } from './video.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'dash', pathMatch: "full"
  },
  {
    path: 'dash', component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    VideoListComponent,
    VideoViewerComponent,
    VideoFiltersComponent,
    StatGraphsComponent,
    DashboardComponent,
    VideoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [VideoService]
})
export class AppRoutingModule { }
