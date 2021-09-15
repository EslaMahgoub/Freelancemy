import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component: HomePageComponent},
  { path: "documents", component: DocumentsComponent},
  { path: "proposals", component: ProposalListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
