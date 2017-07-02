import { Component, OnInit, Input } from '@angular/core';
import { EnvVerResult } from '../envver-result.model';

@Component({
  selector: 'env-ver-list-component',
  templateUrl: './env-ver-list-component.html',
  styleUrls: ['./env-ver-list-component.css']
})
export class EnvVerListComponent implements OnInit {

  @Input() envVerResults: EnvVerResult[];

  constructor() { }

  ngOnInit() {
  }

}
