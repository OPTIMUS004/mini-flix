import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'

@Component({
	template: `

			<div class="row container">
				<h1> Favorites List</h1>
				<hr/>
				<div *ngFor = "let movie of movies" class="row">
					<img src="{{movie?.Poster}}" alt="{{movie?.Title}}" class="col">
					<div class="col">Title: {{movie?.Title}}</div>
					<div class="col">Duration: {{movie?.Runtime}}</div>
					<div class="col">Release Date: {{movie?.Released}}</div>
					<div class="col btn-norm text-center mt-2" [routerLink]="['/miniflix', movie?.id]"><a>More Details</a></div>
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
			font-size: 15px;
			height: 380px;
			justify-content: center;
		}
		a{
			margin-left:0;
		}
		a:hover{
			cursor: pointer;
			opacity: 0.9;
		}

	`]			
		})

export class FavoriteComponent {
movies
constructor( public auth:AuthService ){}

ngOnInit(){
	this.movies = this.auth.getFavorite()
}
	
}