import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'favorite',
	template: `
		<div class="votingWidgetContainer pointable" (click)="onClick()">
			<div class ="well votingWidget">
				<div class="votingButton col">
					<i class="glyphicon glyphicon-heart" [style.color]="iconColor">+</i>

				</div>
			</div>
		</div>
		`,
	styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
	
	@Input() set liked(val) {
		this.iconColor = val ? 'red' : 'white';
	}
	@Output() like = new EventEmitter();

	iconColor: string;

	onClick() {
		this.like.emit({});
		}
 }
