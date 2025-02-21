import { Router } from '@angular/router';
import { inject } from '@angular/core';
 
export function onAppStart(): Promise<any> {
// export function onAppStart() {
  const router = inject(Router);
  return new Promise((resolve, reject) => {
    console.log(router);
    resolve(true);
  });
}