import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnvVerService } from '../service/env-ver.service';

@Component({
  selector: 'env-ver-form',
  templateUrl: './env-ver-form.component.html',
  styleUrls: ['./env-ver-form.component.css']
})
export class EnvVerFormComponent implements OnInit {
  envVerForm: FormGroup;

  constructor(formBuilder: FormBuilder, private envVerService: EnvVerService) {
    this.envVerForm = formBuilder.group({
      'envVerName': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('form:', form);
    this.envVerService.findAll();
  }
}
