import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUrdu: boolean = false;
  showContent: boolean = false;

  showHiddenContent() {
    this.showContent = true;
  }
}
