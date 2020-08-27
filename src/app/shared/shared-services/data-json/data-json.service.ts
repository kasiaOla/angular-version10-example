import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor(private httpClient: HttpClient) { }

  readDataJson(): Observable<any>{
   return this.httpClient.get('../../../../assets/data.json');
  }
}
