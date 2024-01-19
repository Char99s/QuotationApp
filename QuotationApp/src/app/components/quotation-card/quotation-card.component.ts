import { Component, Input } from '@angular/core';
import { Quotation } from '../../models/quotation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quotation-card',
  templateUrl: './quotation-card.component.html',
  styleUrls: ['./quotation-card.component.css']
})
export class QuotationCardComponent {
  @Input() quotation!: Quotation;
  datepipe: DatePipe = new DatePipe('en-US')
}
