import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	templateUrl: './login.component.html',
	styles: [`
			em{ margin-left: 50px; color: #E05C65;}
 			.error input{ background-color: #E3C3C5}
 			.error ::-webkit-input-placeholder { color:#999;}
 			.error ::-moz-placeholder { color: #999; }
 			.error :-moc-placeholder { color: #999; }
 			.error :ms-input-placeholder { color: #999;}
			`]
			})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	
	constructor(private authService:AuthService, private router:Router){
	}

	ngOnInit(){
		let userName = new FormControl('Enter Username',Validators.required)
		let password = new FormControl('...',Validators.required)

		this.loginForm = new FormGroup({
			userName,
			password
		})
	}

	userLogin(formValue){
	if(this.loginForm.valid){
		this.authService.validateUser(formValue.userName, formValue.password  );
		this.router.navigate(['miniflix'])
		}else{
			alert('oops! invalid input')
		}

	}
	cancel(){
		this.router.navigate(['miniflix'])	
	}
}