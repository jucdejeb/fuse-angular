import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AuthService } from './auth-service.service';
import { UrlRoute } from '@fuse/common/Routes';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      const url = UrlRoute.pages+ "/"+ UrlRoute.auth + '/' + UrlRoute.login
      this.router.navigate([url]);
      return false;
    }
  }

}
