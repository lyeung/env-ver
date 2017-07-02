import { Component } from '@angular/core';
import { EnvVerResult } from './envver-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  envVerResults: EnvVerResult[];

  constructor() {
    this.envVerResults = [];
    this.envVerResults.push(new EnvVerResult('qa', 'SKT-100', 'ok', '2018-07-02 12:03:20 am'));
    this.envVerResults.push(new EnvVerResult('qa2', 'SKT-101', 'ok', '2018-07-02 1:17:20 am'));
  }
}
