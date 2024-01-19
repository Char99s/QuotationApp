import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../utils/environment';
import { apiPaths } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private http: HttpClient) { }

  searchQuotations(searchTerm: string, isReversed: boolean, page: number): Observable<any> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchTerm", searchTerm);
    queryParams = queryParams.append("isReversed", isReversed);
    queryParams = queryParams.append("page", page);

    return this.http.get(environment.apiUrl + apiPaths.quotationsSearch,
      { headers: { 'Accept': 'text/json' }, params: queryParams },
    );
  }

}
