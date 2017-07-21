import { Component, OnInit } from '@angular/core';
import { EnvVerResult } from '../envver-result.model';

@Component({
  selector: 'env-ver-dashboard',
  templateUrl: './env-ver-dashboard.component.html',
  styleUrls: ['./env-ver-dashboard.component.css']
})
export class EnvVerDashboardComponent implements OnInit {
  envVerResults: EnvVerResult[];
  
  constructor() {
    this.envVerResults = [];
    this.envVerResults.push(new EnvVerResult('qa', 'SKT-100', 'ok', '2018-07-02 12:03:20 am'));
    this.envVerResults.push(new EnvVerResult('qa2', 'SKT-101', 'ok', '2018-07-02 1:17:20 am'));
  }

  ngOnInit() {
  }

}
