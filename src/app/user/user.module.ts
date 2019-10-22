import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { FavoriteComponent } from './favorite.component'

@NgModule({
	declarations: [
		ProfileComponent,
		LoginComponent,
		FavoriteComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(userRoutes),
		FormsModule,
		ReactiveFormsModule
	],
	providers: []

})

export class UserModule {
	
}