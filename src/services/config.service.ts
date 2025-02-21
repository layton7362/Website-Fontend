import { Injectable } from '@angular/core';
import { environment } from '../environments/environemt';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config = environment;
}
