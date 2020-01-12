import { Component, Input } from '@angular/core';
import { trigger,animate,style,transition,state } from '@angular/animations'
import { AuthService } from '../user/auth.service'

@Component ({
	selector: 'flix-thumbnail',
	template: `
	
			<div class="container ">
				<div class="row" [@fadeInOut]>
					<div class="column" >
						<div class="card">
							<img src="{{data?.Poster}}" alt="{{data?.Title}}" class="col">
							<div class="container bg-dark">
								<h4>{{data?.Title}}</h4>
								<p class="title">Duration: {{data?.Runtime}}</p>
								<p>Release Date: {{data?.Released}}</p>
								<p class="btn-norm text-center mt-2" [routerLink]="['/miniflix',  data.id]"><a>More Details</a></p>
								<p *ngIf="auth?.isAuthenticated()">
									<like (like)="toggleData(data)" [liked]="userHasLiked(data)">		
									</like>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	`,
	styles: [`.row{
		width:22%;
		margin-bottom: 90px;
		padding: 0 8px;
		margin-right: 10px;
		border: none;

	}
	.card{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border: 0;
		width:250px;
		height: 400px;
	}
	img{
		height: 300px;
	}
	.container{
		padding: 15px 16px;
	}
	.btn-norm:hover{
		cursor: pointer;
	}
	
@media screen and (max-width: 900px){

.row{
	display: block;
	width: 30.33%;
}
.card{
	padding-right: 0;
	padding-left: 0;
	width: 250px;
}
}
@media screen and (max-width: 650px){

.row{
	display: block;
	width: 100%;
}
.card{
	padding-right: 0;
	padding-left: 0;
	width: 250px;
}
}}


	`],
	animations: [trigger('fadeInOut', [
			state('void',style({opacity: 0
			})),
			transition('void<=>*',animate(2000))
		]
		)]
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