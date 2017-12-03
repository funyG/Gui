import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AgentCreateComponent} from './Agents-Dashboard/Edit-Agents/agent-create.component';
import { AgentDetailsComponent } from './Agents-Dashboard/Agent-Details/agent-details.components';
import { AgentViewComponent } from './Agents-Dashboard/Edit-Agents/agent-view.component';
const routes: Routes = [
  {
    path: 'Agent-Dashboard',
    component: AgentDetailsComponent
  },
  {
    path: 'edit',
    component: AgentCreateComponent
  },
  {
    path: 'agentView/:id',
    component: AgentViewComponent
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

