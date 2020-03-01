import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {UserNavComponent} from './components/user-nav/user-nav.component';
import {LoginComponent} from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		UserNavComponent,
		LoginComponent,
		HomeComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
		BrowserAnimationsModule,
		AppMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
