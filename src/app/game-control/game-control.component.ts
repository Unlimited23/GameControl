import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('intervalEmmited') intervalEmmiter = new EventEmitter<number>(); 
  index: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalEmmiter.emit(this.index + 1);
      this.index++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
