import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'any' //changed root to any.
})
// diff between any and root is the root is singleton always same value, but the any is creates instance for modules where its imported.
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log("%cConfig Services Initialized","background:indigo;color:yellow;padding:0.5rem");
    console.log("%cConfiguratble token "+JSON.stringify(this.configToken),"background:indigo;color:yellow;padding:0.2rem");
  }
}
