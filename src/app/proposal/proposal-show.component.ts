import { Component, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import {HttpClient, HttpResponse, HttpHeaders , HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Proposal } from "./proposal";
import { ProposalService } from "./proposal.service";


@Component({
  selector: "proposal-show",
  templateUrl: "proposal-show.component.html",
  styleUrls: ["proposal-show.component.css"],
  providers: [ProposalService]
})

export class ProposalShowComponent{
  constructor(
    private route:ActivatedRoute,
    private proposalService: ProposalService,
    private httpClient: HttpClient,
  ) {}

  @Input() proposal: Proposal;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
          this.proposalService.getProposal(+params['id']).subscribe(
            data => this.proposal = data);
          }
        )};
  }