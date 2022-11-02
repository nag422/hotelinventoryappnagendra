import { InjectionToken } from '@angular/core';
// factory type function no need to register in any where, this is the main advantage
export const localStorageToken = new InjectionToken<any>('local storage', {
    providedIn: 'root',
    factory() {
        return localStorage; // can use any browser thing like window.location like this here can use and by inject service
        // return sessionStorage; // like this its better to use here rather than in component files.
    },
});