import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChildFn } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivateChild(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    
    return true;
  }
}

export const AuthGuard: CanActivateChildFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivateChild(next, state);
}
