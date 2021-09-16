import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse, HttpHeaders , HttpRequest} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

import {Proposal} from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://127.0.0.1:3002/proposals';

  constructor(
    private httpClient: HttpClient 
  ) {}
  
  getProposals(): Observable<Proposal[]> {
    return this.httpClient.get<Proposal[]>(this.proposalsUrl)
                    .pipe(
                          retry(1),
                          catchError(this.handleError)
                    );
  }

  getProposal(id: number): Observable<Proposal> {
    return this.httpClient.get<Proposal>(this.proposalsUrl + '/' + id)
  }

  createProposal(proposal: Proposal): Observable<Proposal>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post<Proposal>(this.proposalsUrl, proposal, httpOptions)
    .pipe(
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