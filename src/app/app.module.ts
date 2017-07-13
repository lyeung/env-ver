import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnvVerListComponent } from './env-ver-list/env-ver-list-component';
import { EnvVerItemComponent } from './env-ver-item/env-ver-item-component';
import { EnvVerItemLightComponent } from './env-ver-item-light/env-ver-item-light.component';
import { EnvVerItemTextComponent } from './env-ver-item-text/env-ver-item-text.component';
import { EnvVerFormComponent } from './env-ver-form/env-ver-form.component';

import { EnvVerService } from './service/env-ver.service';

@NgModule({
  declarations: [
    AppComponent,
    EnvVerListComponent,
    EnvVerItemComponent,
    EnvVerItemLightComponent,
    EnvVerItemTextComponent,
    EnvVerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: EnvVerService,
      deps: [ Http ],
      useFactory(http: Http) {
        return new EnvVerService(http);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
