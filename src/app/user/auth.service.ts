import { Injectable } from '@angular/core'
import {IUser } from './user.model'
import { Router } from '@angular/router'
@Injectable()

export class AuthService{
	currentUser: IUser

	constructor(private router:Router){}

	validateUser(userName: string, password: string){
		users.some((user) => {
		if (user.username === userName && user.password === password){
			 this.currentUser = user;
			 return this.router.navigate(['miniflix']);
			
				}else{
					alert("Invalid Username or Password");
				return this.router.navigate(['user/login'])
				}			
			})
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

saveNewAccount(firstName, lastName, userName, password){
	
	const newUser = {
			id: 1234,
			firstName: firstName,
			lastName: lastName,
			username: userName,
			password: password,
			favorite: []
			}
	users.push(newUser);
	this.currentUser = newUser;
}

getFavorite(){
			return this.currentUser.favorite;
		}

logout(){
	this.currentUser = undefined;
	this.router.navigate(['user/login'])
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