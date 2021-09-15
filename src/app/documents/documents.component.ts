import { Component } from "@angular/core";
import { Document } from "./document";

@Component({
  selector: "documents",
  templateUrl: "documents.component.html",
  styleUrls: ['document.component.css']
})

export class DocumentsComponent {
  pageTitle:string = "Freelancemy | Documents";
  documents: Document[] = [
    {
    title: "Ruby on rails prposal",
    description: "Ruby on rails proposal",
    file_url: "http://google.com",
    updated_at: "30-07-1993",
    image_url: "http://google.com",
    },
    {
      title: "Angular prposal",
      description: "Angular proposal",
      file_url: "http://google.com",
      updated_at: "30-07-1995",
      image_url: "http://google.com",
      },
      {
        title: "React prposal",
        description: "React proposal",
        file_url: "http://google.com",
        updated_at: "30-07-1997",
        image_url: "http://google.com",
        },
  
  ];
}; 