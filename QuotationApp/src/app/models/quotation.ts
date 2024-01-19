export interface Quotation {
  quotationNumber: string;
  policyOwner: string;
  carMake: string;
  carYearOfMake: number;
  quotationStatus: QStatus;
  creationDate: Date;
}

enum QStatus {
  Draft,
  Purchased
}
