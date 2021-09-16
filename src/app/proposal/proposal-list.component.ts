import { Component } from "@angular/core";
import {Router} from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Proposal } from "./proposal";
import { ProposalService } from "./proposal.service";


@Component({
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html",
  styleUrls: ["proposal-list.component.css"],
  providers: [ProposalService]
})

export class ProposalListComponent {
  pageTitle:string = "Freelancemy | Proposal List";
  proposals: Proposal[];
  errorMessage:string;
  constructor(
    private proposalService: ProposalService,
    private router: Router
    ) {}

    ngOnInit(): void {
      let timer$ = timer(0, 5000); // make call to api every 5000 ms => 5 sec
      timer$.subscribe(() => this.getProposals());
    }
    getProposals(){
      this.proposalService.getProposals()
          .subscribe(
            data => this.proposals =  data,
            error => this.errorMessage = <any>error
          )
    }

    gotToShow(proposal:Proposal): void {
      let link = ['/proposal', proposal.id];
      this.router.navigate(link);
    }
}; 