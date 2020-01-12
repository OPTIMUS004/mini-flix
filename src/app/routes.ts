import { Routes } from '@angular/router';

import { 
		FlixListComponent,
		MovieListComponent,
		SeriesListComponent,
		DetailsPageComponent,
		FlixRouteActivator,
		FlixListResolver
} from './HomeFolder/index'
import { Error404Component } from './errors/404.component';



export const appRoutes: Routes = [

	{ path: 'miniflix', component: FlixListComponent, resolve:{data:FlixListResolver} },
	{ path: 'miniflix/movies', component: MovieListComponent, resolve:{data:FlixListResolver} },
	{ path: 'miniflix/series', component: SeriesListComponent, resolve:{data:FlixListResolver} },
	{ path: '', redirectTo: '/miniflix', pathMatch: 'full' },
	{ path: 'miniflix/:id', component: DetailsPageComponent, canActivate: [FlixRouteActivator] },
	{ path: '404', component: Error404Component },
	{ path: 'user', loadChildren: './user/user.module#UserModule'}
	 
];
