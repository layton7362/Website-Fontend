import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BroadcastService {
    // constructor(private cdref: ChangeDetectorRef) { }
    
    private contentSource = new Subject<any>();
    contentMessage$ = this.contentSource.asObservable();

    sendContent(message: string) {
        this.contentSource.next(message);
        // this.cdref.detectChanges();
    }
}