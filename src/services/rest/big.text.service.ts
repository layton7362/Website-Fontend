import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environemt';

@Injectable({
  providedIn: 'root'
})
export class BigTextService {
  constructor(private http: HttpClient) {}
  
  private readonly urlRange = '/text/range?from=0&range=10'

  getTexts(): Observable<any> {
    return this.http.get<any[]>(environment.backendUrl + this.urlRange);
  }

}
