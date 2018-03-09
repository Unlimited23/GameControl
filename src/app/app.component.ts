import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalsOdd: number[] = [];
  intervalsEven: number[] = [];

  onIntervalReceived(interval: number) {
    if(interval % 2 == 0) {
      this.intervalsEven.push(interval);
    } else {
      this.intervalsOdd.push(interval);
    }
  }
}
