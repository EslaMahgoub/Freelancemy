import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse, HttpHeaders , HttpRequest} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

import {Document} from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://127.0.0.1:3001/freelancemy_documents.json';

  constructor(
    private httpClient: HttpClient 
  ) {}
  
  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>(this.documentsUrl)
                    .pipe(
                          retry(1),
                          catchError(this.handleError)
                    );
  }
  
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
  
  
}