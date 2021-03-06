import { Component,OnInit } from '@angular/core';
import { FlixService } from '../shared/flix.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styles: [`
        .flip-boldness{ 
          font-weight: bold; 
          border: 1px solid red; 
          padding: 2px; 
          margin-top: 30px;
          background-color: black; 
          color:#fff 
        }
        .intro{ margin: 15px; }
        .flip-color{ color: red; }
  			.flip-size{ font-size: 12px; letter-spacing: 1px; }			
  			.flip-title{ border: 2px solid red; font-size: 70px; padding: 0 12px; cursor: pointer; }
  			
  			.flip-plot{
          margin-top:5px;
          padding: 6px;
        }
        .flex-container{
          display: flex;
	        flex-flow: row warp;
          justify-content: center;
          justify-item: center;
          margin-top: 50px;
        }
        .details{
          background: grey;
          margin-bottom: 20px;
        }
        img{ max-width:100%; height: 300px; }
        .content-one{
          margin-right: 100px;
        }
        @media only screen and (max-width: 750px) {
          .poster{
            display: none;
          }
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