import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerAttSelectorComponent } from './server-att-selector/server-att-selector.component';
import { ServerClassSelectorComponent } from './server-class-selector/server-class-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerAttSelectorComponent,
    ServerClassSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
