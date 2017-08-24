import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private termsService: TermsService
  ) { }

  ngOnInit() { }

  searchFor(searchText): Boolean {
    // Split by white space and commas.
    this.termsService.setTerms(String(searchText).split(/[ ,]+/));
    this.router.navigateByUrl('/list');
    return false;
  }
}
