import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EnvVerListComponent } from './env-ver-list/env-ver-list-component';
import { EnvVerItemComponent } from './env-ver-item/env-ver-item-component';
import { EnvVerItemLightComponent } from './env-ver-item-light/env-ver-item-light.component';
import { EnvVerItemTextComponent } from './env-ver-item-text/env-ver-item-text.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvVerListComponent,
    EnvVerItemComponent,
    EnvVerItemLightComponent,
    EnvVerItemTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
