import { trigger,animate,style,transition,state } from '@angular/animations'
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
			.form-control{
				border-radius: 0;
				background-clip: 0;
			}
			.btn-default{
				background-color: #007bff;
				border: 1px solid #007bff;
				outline: 0;
				border-radius: 0;

			}
			.flex-container{
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				justify-item: center;
			}
	`],
	animations: [trigger('EnterLeave',[
		state('flyIn', style({transform:'translateX(0)'})),
		transition(':enter',[
		style({transform:'translateX(100%)'}),
		animate('0.5s 300ms ease-in')
		]),
		transition(':leave',[
		animate('0.3s ease-out',style({transform:'translateX(-100%)'}))
		])
		])]

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