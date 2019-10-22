import { Component, OnInit } from '@angular/core';
import { FlixService } from './shared/flix.service';
import { ActivatedRoute } from '@angular/router'

@Component ({
	selector: 'movie-list',
	template: `
			<div class="container" >

				<h2>Trending Movies</h2>
				<hr>
			</div>
			<flix-thumbnail *ngFor="let datum of flixData" [data]="datum" [class.show]="datum?.Type === 'series'"  ></flix-thumbnail>
	`,
	styles:[`.container{
				padding-top: 20px;
			}
			.show{
				display: none
			}
	`]
})

export class MovieListComponent implements OnInit {
	
 flixData: any

constructor (private flixService:FlixService, private route:ActivatedRoute){

  }
  ngOnInit(){
    this.flixData = this.route.snapshot.data['data']
  }
}