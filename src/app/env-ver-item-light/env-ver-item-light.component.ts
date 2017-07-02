import { Component, OnInit, Input } from '@angular/core';
import { EnvVerResult } from '../envver-result.model';

@Component({
  selector: 'env-ver-item-light',
  templateUrl: './env-ver-item-light.component.html',
  styleUrls: ['./env-ver-item-light.component.css']
})
export class EnvVerItemLightComponent implements OnInit {
  @Input() envVerResult: EnvVerResult;
  
  constructor() { }

  ngOnInit() {
  }

}
