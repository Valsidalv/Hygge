import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ResolveService } from './resolve.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class Resolver implements Resolve<any> {
  constructor(private resolveService: ResolveService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.resolveService.getPosts();
  }
}