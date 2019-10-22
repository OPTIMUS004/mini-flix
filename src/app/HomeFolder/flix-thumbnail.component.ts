import { Component, Input } from '@angular/core';
import { AuthService } from '../user/auth.service'

@Component ({
	selector: 'flix-thumbnail',
	template: `
	
			<div class="container">
				<div class="row bg-dark col-2 center">
					<img src="{{data?.Poster}}" alt="{{data?.Title}}" class="col">
					<div class="col">Title: {{data?.Title}}</div>
					<div class="col">Duration: {{data?.Runtime}}</div>
					<div class="col">Release Date: {{data?.Released}}</div>
					<div class="col btn-norm text-center mt-2" [routerLink]="['/miniflix',  data.id]"><a>More Details</a></div>
					<div *ngIf="auth?.isAuthenticated()">
					<favorite (like)="toggleData(data)" [liked]="userHasLiked(data)">		
					</favorite>
					</div>
				</div>
			</div>
	`,
	styles: [`
		.row{
			color: white;
			opacity: 0.9;
			padding: 15px 5px;
			margin: 20px 25px;
			display: inline-block;
			float:left;
			font-size: 14px;
			height: 500px;
			max-width:25%;
			justify-content: center;
		}
		a{
			margin-left:0;
		}
		a:hover{
			cursor: pointer;
			opacity: 0.9;
		}

		@media screen and (max-width: 900px){

			.row{
				height: 320px;
				max-width:35%;
			}
		}

	`]
})

export class FlixThumbnailComponent{
	@Input() data: any

constructor( public auth:AuthService){}

toggleData(datum){
		if(this.userHasLiked(datum)){
			this.auth.deleteLike(datum)
		}else{
			this.auth.addLike(datum)
		}
	}
userHasLiked(datum){
		return this.auth.userHasLiked(datum) 
	}
}