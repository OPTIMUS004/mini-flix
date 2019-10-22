
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { FlixService } from '../shared/flix.service'
import { map } from 'rxjs/operators'

@Injectable()

export class FlixListResolver implements Resolve<any> {
	constructor(private flixService:FlixService) {

	}

	resolve(){
		
		return this.flixService.getFlixData()
	}
}