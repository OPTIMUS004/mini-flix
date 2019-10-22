import { Component,OnInit } from '@angular/core';
import { FlixService } from '../shared/flix.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styles: [`
  .flip-boldness{ font-weight: bold; border: 1px solid red; padding: 2px; background-color: black; color:#fff}
  			.flip-color{ color: red; }
  			.flip-size{ font-size: 12px; letter-spacing: 1px; }
  			.container{ margin-top: 80px; }
  			.flip-title{ border: 2px solid red; font-size: 70px; padding: 0 12px;}
  			.row{display: inline-block; float:left; margin-top: 15px }
  			.flip-plot{
  			
  				margin-top:5px;
  			}
        .details{
          background: grey;
          
  
        }
        .content-one{
          margin-right: 100px;
        }
  		`]
})
export class DetailsPageComponent implements OnInit {
	
	flixData:any

	constructor(private flixService:FlixService, private route:ActivatedRoute){

	}
	ngOnInit(){

  this.route.params.forEach((params:Params)=>{
  this.flixData = this.flixService.getFlixDatum(+params['id'])
  })

    }

}