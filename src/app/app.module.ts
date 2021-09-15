import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    ProposalListComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
