import { Component } from "@angular/core";
import {Proposal} from "./proposal";
@Component({
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html",
})

export class ProposalListComponent {
  pageTitle:string = "Freelancemy | Proposal List";
  prposalOne: Proposal = new Proposal(15, 'My Company', 'https://github.com/EslaMahgoub/', 'Ruby On Rails', 
  150, 120, 15, "eslamkhaledtawfik@gmail.com")
  prposalTwo: Proposal = new Proposal(12, 'ASD Company', 'https://github.com/EslaMahgoub/', 'Ruby On Rails', 
  180, 150, 15, "eslamkhaledtawfik@gmail.com")
  prposalThree: Proposal = new Proposal(18, 'XYZ Company', 'https://github.com/EslaMahgoub/', 'Ruby On Rails', 
  120, 140, 20, "eslamkhaledtawfik@gmail.com")

  proposals: Proposal[] = [this.prposalOne, this.prposalTwo, this.prposalThree]
}; 