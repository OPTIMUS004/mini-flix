import { Component, OnInit } from '@angular/core';
import { FlixService } from './shared/flix.service';
import { ActivatedRoute } from '@angular/router'
@Component ({
	selector: 'flix-list',
	templateUrl: './flix-list.component.html',
	styles:[`.container{
				padding-top: 20px;
			}
			.show{
				display: none;
			}
	`]

})

export class FlixListComponent implements OnInit {
	
  flixData: any
  searchTerm = ""
  foundSessions=['a']

	constructor (private flixService:FlixService, private route:ActivatedRoute){

  }
  ngOnInit(){
    this.flixData = this.route.snapshot.data['data']
  }
  searchSessions(searchTerm) {

	this.flixService.searchSessions(searchTerm).subscribe(sessions => {this.foundSessions = sessions;
		})
	}
}