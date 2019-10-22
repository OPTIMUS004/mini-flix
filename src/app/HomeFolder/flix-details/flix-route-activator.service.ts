import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { FlixService } from '../shared/flix.service'

@Injectable()

export class FlixRouteActivator implements CanActivate {
	constructor(private flixService:FlixService, private router:Router ) {

	}

	canActivate(route:ActivatedRouteSnapshot){
		const linkExist = !!this.flixService.getFlixDatum(+route.params['id'])

		if (!linkExist)
			this.router.navigate(['/404'])
		return linkExist
	}
}