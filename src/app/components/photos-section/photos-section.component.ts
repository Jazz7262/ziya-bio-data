import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.scss'],
})
export class PhotosSectionComponent {
  photos = [0, 1, 2, 3, 4, 5, 6];
  fullView: boolean = true;

  toggleFullView() {
    this.fullView = !this.fullView;
  }
}
