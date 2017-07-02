import { Component, OnInit, Input } from '@angular/core';
import { EnvVerResult } from '../envver-result.model';
@Component({
  selector: 'env-ver-item-text',
  templateUrl: './env-ver-item-text.component.html',
  styleUrls: ['./env-ver-item-text.component.css']
})
export class EnvVerItemTextComponent implements OnInit {
  @Input() envVerResult: EnvVerResult;

  constructor() { }

  ngOnInit() {
  }

}
