import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule, ROUTES } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimations(),
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ]
};

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppModule { }