import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router,private authservice:AuthService) {}
  canActivate() {
    if (this.authservice.isLoggedIn()) return true;
    else {
      // return false;
      this._router.navigate(['/h6']);
      // return
    }
    return false;
  }
  
}
