import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'scoreboard';
  public startingMinutes = 1;
  public time = 10;
  public scoreboardMessage: string;
  
  ngOnInit(){
  setInterval(()=> {
    if(this.time >= 0){
    this.updateQuarterGameClock();
    }
  }, 1000);
  
  }

  updateQuarterGameClock() {
    const minutes = Math.floor(this.time / 60);
   
    let seconds = this.time % 60;
    seconds = seconds < 10 ? 0 + seconds : seconds;
this.scoreboardMessage = `${minutes}:${seconds}`;
   this.time--;
  }
}
