import { Component, OnInit } from '@angular/core';
import { Quotation } from '../../models/quotation';
import { DatePipe } from '@angular/common';
import { QuotationService } from '../../services/quotation.service';

@Component({
  selector: 'app-quotations-search',
  templateUrl: './quotations-search.component.html',
  styleUrls: ['./quotations-search.component.css']
})
export class QuotationsSearchComponent implements OnInit {

  quotations: Quotation[] = [];
  errorTitle: string = ""
  errorFound = false
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;
  query: string = "";
  datepipe: DatePipe = new DatePipe('en-US')
  constructor(private quotationService: QuotationService) { }

  numToArray(n: number): Array<number> {
    return Array(n);
  }

  ngOnInit(): void {
    this.search("", "false", "false", 1);
  }

  search(searchTerm: string, dateSelector: string, dateSelectorMobile: string, n: number): void {
    this.query = searchTerm;
    this.currentPage = n;
    var isReversed;
    if (dateSelector == "true" || dateSelectorMobile == "true")
      isReversed = true
    else
      isReversed = false

    this.quotationService.searchQuotations(searchTerm, isReversed, this.currentPage).subscribe(
      data => { this.quotations = data.quotations as Quotation[]; this.totalPages = data.totalPages; this.totalCount = data.totalCount; this.errorFound = false },
      error => { this.errorTitle = error.error.title; this.errorFound = true; this.quotations = [] }
    );

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}
