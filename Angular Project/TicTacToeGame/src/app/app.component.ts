import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicTacToeGame';
  isDisabled = false;
  
  toggle(){
    this.isDisabled=!this.isDisabled;
  }
  titleText(){
    return this.title;
  }
}
