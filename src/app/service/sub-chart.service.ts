import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubChartService {

  constructor(private http:HttpClient) { }

  callSubChartApi(urlBody)
  {
    let apiLink = '65.1.73.181:3004';
    return this.http.post('http://'+apiLink+'/api/v1.0/SmartTest/SubCategoryStatistics',urlBody);
  }
}
