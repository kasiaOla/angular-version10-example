import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor(private httpClient: HttpClient) { }

  readDataJson(){
   return this.httpClient.get('../../../../assets/data.json');
  }
}
