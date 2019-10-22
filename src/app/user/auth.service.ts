import { Injectable } from '@angular/core'
import {IUser } from './user.model'
@Injectable()

export class AuthService{
	currentUser: IUser

	validateUser(userName: string, password: string){
			this.currentUser= {
				id: 1,
				username: 'Integral',
				password: 'we',
				firstName: 'taiwo',
				lastName: 'ayo',
				favorite: []
				}
			}

isAuthenticated(){
	return !!this.currentUser;
}
deleteLike(data){
	this.currentUser.favorite = this.currentUser.favorite.filter( datum =>datum !=data )
}
addLike(data){
	this.currentUser.favorite.push(data)
}
userHasLiked(data){
	if(this.isAuthenticated){
	return this.currentUser.favorite.some( datum => datum === data )
	}else{ return false; }
}         
		getFavorite(){
			return this.currentUser.favorite;
		}

	

updateProfile(userName, password){
	this.currentUser.username = userName;
	this.currentUser.password = password; 
	}
}

const users = [
				{
				id: 1,
				username: 'Integral',
				password: 'we',
				firstName: 'taiwo',
				lastName: 'ayo',
				favorite: []
				},
				{
				id: 2,
				username: 'Lashota',
				password: 'we',
				firstName: 'taiwo',
				lastName: 'ayo',
				favorite: []
				},
		]