import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBigTextService {
  getTexts(): Observable<string[]> {
    return of(["Mock-Text 1", "Mock-Text 2", "Mock-Text 3"]); 
  }
}
