import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { Http, HttpModule} from "@angular/http";
import { AgentDetailsComponent } from './Agents-Dashboard/Agent-Details/agent-details.components';
import { AppRoutingModule } from "./app-routing.module";
import { AgentCreateComponent } from './Agents-Dashboard/Edit-Agents/agent-create.component';
import { AgentViewComponent } from './Agents-Dashboard/Edit-Agents/agent-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentDetailsComponent,
    AgentCreateComponent,
    AgentViewComponent


  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
