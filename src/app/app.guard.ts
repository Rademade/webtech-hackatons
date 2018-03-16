import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SignService } from './sign/sign.service';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private signService: SignService,
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // return this.signService.isAuthenticated().then(
    //   (authentificated: boolean) => {
    //     if (this.signService.isAuthenticated()) {
    //       this.router.navigate(['/']);
    //       return true;
    //     } else {
    //       this.router.navigate(['/sign']);
    //       return false;
    //     }
    //   }
    // );
  }
}
