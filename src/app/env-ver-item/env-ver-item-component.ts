import { Component, OnInit, Input } from '@angular/core';
import { EnvVerResult } from '../envver-result.model';

@Component({
  selector: 'env-ver-item-component',
  templateUrl: './env-ver-item-component.html',
  styleUrls: ['./env-ver-item-component.css']
})
export class EnvVerItemComponent implements OnInit {
  @Input()
  envVerResult: EnvVerResult;

  constructor() { }

  ngOnInit() {
  }

}
