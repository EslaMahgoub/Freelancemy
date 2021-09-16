import { Component, OnInit } from "@angular/core";
import { Observable, timer } from 'rxjs';
import { Document } from "./document";
import { DocumentService } from "./document.service";

@Component({
  selector: "documents",
  templateUrl: "documents.component.html",
  styleUrls: ['document.component.css'],
  providers: [DocumentService]
})

export class DocumentsComponent implements OnInit {
  pageTitle:string = "Freelancemy | Documents";
  documents: Document[];
  errorMessage:string;

  constructor(
    private documentService: DocumentService
    ) {}

  ngOnInit(): void {
    let timer$ = timer(0, 5000); // make call to api every 5000 ms => 5 sec
    timer$.subscribe(() => this.getDocuments());
  }
  getDocuments(){
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents =  documents,  // Response
          error => this.errorMessage = <any>error
        )
  }
}; 