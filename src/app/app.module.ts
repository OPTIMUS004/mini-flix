import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './user/auth.service'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
        FlixListComponent,
        SeriesListComponent,
        MovieListComponent,
        FlixThumbnailComponent,
        DetailsPageComponent,
        FlixService,
        FlixListResolver,
        FlixRouteActivator,
        LikeComponent


} from './HomeFolder/index'
import { FlixAppComponent } from './flix-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { appRoutes } from './routes'

@NgModule({
  declarations: [
   FlixAppComponent,
    FlixListComponent,
    FlixThumbnailComponent,
    DetailsPageComponent,
    NavBarComponent,
    MovieListComponent,
    SeriesListComponent,
    Error404Component,
    CollapsibleWellComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    FlixService,
    FlixRouteActivator,
    FlixListResolver,
    AuthService,
  ],
  bootstrap: [FlixAppComponent]
})
export class AppModule { }
