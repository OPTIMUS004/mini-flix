import { Component, OnInit } from '@angular/core';
import { FlixService } from './shared/flix.service';
import { ActivatedRoute } from '@angular/router';
@Component ({
	selector: 'series-list',
	template: `
			<div class="container" >

				<h2>Favorite Tv Shows now Airing</h2>
				<hr>
			</div>
			<flix-thumbnail *ngFor="let datum of flixData" [data]="datum" [class.show]="datum?.Type === 'movie'"  ></flix-thumbnail>
	`,
	styles:[`.container{
				padding-top: 20px;
			}
			.show{
				display: none
			}
	`]
})

export class SeriesListComponent implements OnInit {
flixData: any

	constructor (private flixService:FlixService, private route:ActivatedRoute){

  }
  ngOnInit(){
    this.flixData = this.route.snapshot.data['data']
  }
}